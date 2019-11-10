"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const dayjs = require("dayjs");
let myStatusBarItem;
function activate(context) {
    myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 10000);
    let startTime = dayjs();
    setInterval(() => {
        let totalSecond = dayjs().diff(startTime, 'second');
        myStatusBarItem.text = `${dayjs().format('YYYY-MM-DD HH:mm:ss')}(total: ${secondFormater(totalSecond)})`;
        myStatusBarItem.show();
    }, 1000);
}
exports.activate = activate;
function secondFormater(second) {
    let hours;
    let minutes;
    if (second < 60) {
        return '0m';
    }
    else if (second < 60 * 60) {
        minutes = second / 60;
        return `${Math.floor(minutes)}m`;
    }
    else {
        hours = second / (60 * 60);
        second %= 60 * 60;
        minutes = second / 60;
        return `${Math.floor(hours)}h${Math.floor(minutes)}m`;
    }
}
//# sourceMappingURL=extension.js.map