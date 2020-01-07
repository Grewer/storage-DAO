interface IProps {
    preId: string;
    timeSign?: string;
    type?: 'localStorage' | 'sessionStorage';
    encrypt?: (str: string) => string;
    decrypt?: (str: string) => string;
    timeGap?: number;
}
export interface IResult {
    status: number;
    key?: string;
    value: string | null;
}
/**
 * webStorage
 * class 函数
 * @param {string} preId
 * @version ./package.json
 */
declare class WebStorage {
    private preId;
    private timeSign;
    private storage;
    private encrypt;
    private decrypt;
    private timeGap;
    protected status: {
        SUCCESS: number;
        FAILURE: number;
        OVERFLOW: number;
        TIMEOUT: number;
    };
    /**
     * 初始化函数
     * @constructor 123
     */
    constructor(props: IProps);
    protected getKey: (key: string) => string;
    /**
     * 设置值的函数
     * @public
     * @returns `{
     *  status: number
     *  key?: string
     *  value: string | null
     *  }`
     */
    set: (key: string, value: string, time?: string | number | undefined) => IResult;
    /**
     * 获取值的函数
     * @public
     * @returns `{
     *  status: number
     *  value: string | null
     *  }`
     */
    get: (key: string) => IResult;
    /**
     * 清除某个值
     * @public
     * @returns `{
     *  status: number
     *  value: string | null
     *  }`
     */
    remove: (key: string) => {
        status: number;
        value: string | null;
    };
}
export default WebStorage;
