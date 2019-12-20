interface IProps {
    preId: string;
    timeSign?: string;
    type?: 'localStorage' | 'sessionStorage';
    encrypt?: (str: string) => string;
    decrypt?: (str: string) => string;
    timeGap?: number;
}
interface IResult {
    status: number;
    key: string;
    value: string | null;
}
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
    constructor(props: IProps);
    protected getKey: (key: string) => string;
    set: (key: string, value: string, time?: string | number | undefined) => IResult;
    get: (key: string) => IResult;
    remove: (key: string) => {
        status: number;
        value: string | null;
    };
}
export default WebStorage;
