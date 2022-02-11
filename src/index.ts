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

Date.prototype.getyyyyMMddHHmmssSSS = function(): string {
    return this.getFullYear()
        + '-'
        + ('0' + (this.getMonth() + 1)).slice(-2)
        + '-'
        + ('0' + this.getDate()).slice(-2)
        + ' '
        + ('0' + this.getHours()).slice(-2)
        + ':'
        + ('0' + (this.getMinutes())).slice(-2)
        + ':'
        + this.getSeconds()
        + '.'
        + this.getMilliseconds()
        ;
};

Date.prototype.getyyyyMMddHHmmss = function(): string {
    return this.getFullYear()
        + '-'
        + ('0' + (this.getMonth() + 1)).slice(-2)
        + '-'
        + ('0' + this.getDate()).slice(-2)
        + ' '
        + ('0' + this.getHours()).slice(-2)
        + ':'
        + ('0' + (this.getMinutes())).slice(-2)
        + ':'
        + this.getSeconds()
        ;
};

Date.prototype.getyyyyMMdd = function(): string {
    return this.getFullYear()
        + '-'
        + ('0' + (this.getMonth() + 1)).slice(-2)
        + '-'
        + ('0' + this.getDate()).slice(-2)
    ;
};

Date.prototype.getHHmmssSSS = function(): string {
    return ('0' + this.getHours()).slice(-2)
        + ':'
        + ('0' + (this.getMinutes())).slice(-2)
        + ':'
        + this.getSeconds()
        + '.'
        + this.getMilliseconds()
        ;
};

Date.prototype.getHHmmss = function(): string {
    return ('0' + this.getHours()).slice(-2)
        + ':'
        + ('0' + (this.getMinutes())).slice(-2)
        + ':'
        + this.getSeconds()
        ;
};

Date.prototype.getHHmm = function(): string {
    return ('0' + this.getHours()).slice(-2)
        + ':'
        + ('0' + (this.getMinutes())).slice(-2)
    ;
};

export {};



