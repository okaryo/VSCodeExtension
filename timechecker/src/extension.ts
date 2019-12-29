import * as vscode from 'vscode';
import * as dayjs from 'dayjs';

let myStatusBarItem: vscode.StatusBarItem;
const oneDayTime: number = 60 * 60 * 24;

export function activate(context: vscode.ExtensionContext) {
	myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 1000);
	let totalTime: number = 0;

	setInterval(() => {
		if (vscode.window.state.focused) {
			if (totalTime === oneDayTime) {
				totalTime = 0;
			}
      totalTime ++;
			myStatusBarItem.text = `${dayjs().format('YYYY-MM-DD HH:mm')}(total: ${timeFormater(totalTime)})`;
			myStatusBarItem.show();
		}
	}, 1000);
}

function timeFormater(t: number) {
	if (t < 60 * 60) {
		return `${Math.floor(t / 60)}m`;
	} else {
		let hours: number   = t / (60 * 60);
		t %= 60 * 60;
		let minutes: number = t / 60;
		return `${Math.floor(hours)}h${Math.floor(minutes)}m`;
	}
}
