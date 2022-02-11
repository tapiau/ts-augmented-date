declare global {
    interface Date {
        getyyyyMMdd(): string;
        getyyyyMMddHHmmss(): string;
        getyyyyMMddHHmmssSSS(): string;
        getHHmmssSSS(): string;
        getHHmmss(): string;
        getHHmm(): string;
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

export {};



