import * as vscode from 'vscode';
import * as dayjs from 'dayjs';

let myStatusBarItem: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
	myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 1000);
	const startTime = dayjs();
	
	setInterval(() => {
		let totalMinute = dayjs().diff(startTime, 'minute');
		myStatusBarItem.text = `${dayjs().format('YYYY-MM-DD HH:mm')}(total: ${minuteFormater(totalMinute)})`;
		myStatusBarItem.show();
	}, 1000);
}

function minuteFormater(minute: number) {
	if (minute < 60) {
		return `${minute}m`;
	} else {
		let hours   = minute / 60;
		let minutes = minute % 60;
		return `${Math.floor(hours)}h${minutes}m`;
	}
}
