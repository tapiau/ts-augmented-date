declare global {
    interface Date {
        yyyyMMdd(): string;
    }
}
Date.prototype.yyyyMMdd = function(): string {
    return (new Date(this)).getFullYear() + '-' +('0' + ((new Date(this)).getMonth()+1)).slice(-2)+ '-' +  ('0' + (new Date(this)).getDate()).slice(-2);
};

export {};


// myDate.getFullYear() + '-' +('0' + (myDate.getMonth()+1)).slice(-2)+ '-' +  ('0' + myDate.getDate()).slice(-2) + ' '+myDate.getHours()+ ':'+('0' + (myDate.getMinutes())).slice(-2)+ ':'+myDate.getSeconds()
