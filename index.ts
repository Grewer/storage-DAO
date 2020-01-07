interface IProps {
  preId: string
  timeSign?: string
  type?: 'localStorage' | 'sessionStorage'
  encrypt?: (str: string) => string  // 加密
  decrypt?: (str: string) => string // 解密
  timeGap?: number
}

export interface IResult {
  status: number
  key?: string
  value: string | null
}

/**
 * webStorage
 * class 函数
 * @param {string} preId
 * @version ./package.json
 */
class WebStorage {
  private preId: string;
  private timeSign: string;
  private storage: Storage;
  private encrypt: (str: string) => string;
  private decrypt: (str: string) => string;
  private timeGap: number = 0;

  protected status = {
    SUCCESS: 0,
    FAILURE: 1,
    OVERFLOW: 3,
    TIMEOUT: 4
  }

  /**
   * 初始化函数
   * @constructor 123
   */
  constructor(props: IProps) {
    this.preId = props.preId;
    this.timeSign = props.timeSign || '|-|';
    this.storage = (props.type && props.type === 'sessionStorage') ? (sessionStorage || window.sessionStorage) : (localStorage || window.localStorage)
    this.encrypt = props.encrypt || function (str) {
      return window.btoa(str)
    };
    this.decrypt = props.decrypt || function (str) {
      return window.atob(str)
    };
    this.timeGap = props.timeGap || 1000 * 60 * 60 * 12
    // 默认 12 小时
  }

  protected getKey = (key: string): string => {
    return this.preId + key;
  }

  /**
   * 设置值的函数
   * @public
   * @returns `{
   *  status: number
   *  key?: string
   *  value: string | null
   *  }`
   */
  set = (key: string, value: string, time?: string | number): IResult => {
    let status: number = this.status.SUCCESS;
    const getKey = this.getKey(key);
    try {
      // @ts-ignore
      time = new Date(time).getTime() || time.getTime();
    } catch (e) {
      //  传入的时间参数有误时 默认一个月
      time = new Date().getTime() + this.timeGap
    }
    try {
      this.storage.setItem(getKey, time + this.timeSign + this.encrypt(value));
    } catch (e) {
      status = this.status.OVERFLOW
    }
    return {
      status,
      key: getKey,
      value
    }
  }

  /**
   * 获取值的函数
   * @public
   * @returns `{
   *  status: number
   *  value: string | null
   *  }`
   */
  get = (key: string): IResult => {
    let status: number = this.status.SUCCESS;
    const getKey: string = this.getKey(key);
    let value: string | null = null;
    const timeSignLen: number = this.timeSign.length;
    let index;
    let time;
    let result;
    try {
      // 获取字段对应的数据字符串
      value = this.storage.getItem(getKey)
    } catch (e) {
      result = {
        status: this.status.FAILURE,
        value: null
      };
      return result
    }
    // 如果成功取到字符串
    if (value) {
      // 获取时间戳与数据之间的拼接符号的位置
      index = value.indexOf(this.timeSign);
      // 获取时间戳
      time = +value.slice(0, index);
      // 如果时间未过期
      if (new Date(time).getTime() > new Date().getTime() || time === 0) {
        // 获取数据结果
        value = this.decrypt(value.slice(index + timeSignLen));
      } else {
        // 过期则结果为 null
        value = null;
        status = this.status.TIMEOUT;
        // 删除字段
        this.remove(getKey)
      }
    } else {
      // 未获取字符串传值 为失败
      status = this.status.FAILURE
    }
    result = {
      status: status,
      value: value
    }
    return result
  }

  /**
   * 清除某个值
   * @public
   * @returns `{
   *  status: number
   *  value: string | null
   *  }`
   */
  remove = (key: string): { status: number, value: null | string } => {
    // 默认为失败
    let status: number = this.status.FAILURE;
    const getKey: string = this.getKey(key);
    let value: string | null = null;
    try {
      value = this.storage.getItem(getKey)
    } catch (e) {
    }
    // 如果数据存在
    if (value) {
      try {
        // 删除
        this.storage.removeItem(getKey);
        status = this.status.SUCCESS;
      } catch (e) {
      }
    }

    return {
      status,
      value: status > 0 ? null : this.decrypt(value!.slice(value!.indexOf(this.timeSign) + this.timeSign.length))
    }
  }
}

export default WebStorage
