import * as vscode from 'vscode';
import * as dayjs from 'dayjs';

let myStatusBarItem: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
	myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 1000);
	const startDate: number = dayjs().date();
	let totalTime: number = 0;

	setInterval(() => {
		if (vscode.window.state.focused) {
			let nowDate: number = dayjs().date();
			if (startDate !== nowDate) {
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
