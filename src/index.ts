declare global {
    interface Date {
        getyyyyMMddHHmmssSSS(): string;
        getyyyyMMddHHmmss(): string;
        getyyyyMMdd(): string;
        getHHmmssSSS(): string;
        getHHmmss(): string;
        getHHmm(): string;
    }
}
declare global {
    interface DateConstructor {
        nowyyyyMMddHHmmssSSS(): string;
        nowyyyyMMddHHmmss(): string;
        nowyyyyMMdd(): string;
        nowHHmmssSSS(): string;
        nowHHmmss(): string;
        nowHHmm(): string;
    }
}

function digits2(str: string): string {
    return ('0' + str).slice(-2);
}
function digits3(str: string): string {
    return ('00' + str).slice(-3);
}
function digits4(str: string): string {
    return ('000' + str).slice(-4);
}

Date.prototype.getyyyyMMddHHmmssSSS = function(): string {
    return digits4(this.getFullYear())
        + '-'
        + digits2(this.getMonth() + 1)
        + '-'
        + digits2(this.getDate())
        + ' '
        + digits2(this.getHours())
        + ':'
        + digits2(this.getMinutes())
        + ':'
        + digits2(this.getSeconds())
        + '.'
        + digits3(this.getMilliseconds())
    ;
};

Date.prototype.getyyyyMMddHHmmss = function(): string {
    return digits4(this.getFullYear())
        + '-'
        + digits2(this.getMonth() + 1)
        + '-'
        + digits2(this.getDate())
        + ' '
        + digits2(this.getHours())
        + ':'
        + digits2(this.getMinutes())
        + ':'
        + digits2(this.getSeconds())
    ;
};

Date.prototype.getyyyyMMdd = function(): string {
    return digits4(this.getFullYear())
        + '-'
        + digits2(this.getMonth() + 1)
        + '-'
        + digits2(this.getDate())
    ;
};

Date.prototype.getHHmmssSSS = function(): string {
    return digits2(this.getHours())
        + ':'
        + digits2(this.getMinutes())
        + ':'
        + digits2(this.getSeconds())
        + '.'
        + digits3(this.getMilliseconds())
    ;
};

Date.prototype.getHHmmss = function(): string {
    return digits2(this.getHours())
        + ':'
        + digits2(this.getMinutes())
        + ':'
        + digits2(this.getSeconds())
    ;
};

Date.prototype.getHHmm = function(): string {
    return digits2(this.getHours())
        + ':'
        + digits2(this.getMinutes())
    ;
};

Date.nowyyyyMMddHHmmssSSS = (): string => new Date(Date.now()).getyyyyMMddHHmmssSSS();
Date.nowyyyyMMddHHmmss = (): string => new Date(Date.now()).getyyyyMMddHHmmss();
Date.nowyyyyMMdd = (): string => new Date(Date.now()).getyyyyMMdd();
Date.nowHHmmssSSS = (): string => new Date(Date.now()).getHHmmssSSS();
Date.nowHHmmss = (): string => new Date(Date.now()).getHHmmss();
Date.nowHHmm = (): string => new Date(Date.now()).getHHmm();

export {};



