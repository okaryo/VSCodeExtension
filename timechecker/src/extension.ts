import * as vscode from 'vscode';
import * as dayjs from 'dayjs';

let myStatusBarItem: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
	myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 1000);
	let startTime = dayjs();
	
	setInterval(() => {
		let totalSecond = dayjs().diff(startTime, 'second');
		myStatusBarItem.text = `${dayjs().format('YYYY-MM-DD HH:mm:ss')}(total: ${secondFormater(totalSecond)})`;
		myStatusBarItem.show();
	}, 1000);
}

function secondFormater(second: number) {
	let hours: number;
	let minutes : number;
  if (second < 60) {
		return '0m';
	} else if (second < 60 * 60) {
		minutes = second / 60;
		return `${Math.floor(minutes)}m`;
	} else {
		hours   = second / (60 * 60);
		second  %= 60 * 60;
		minutes = second / 60;
		return `${Math.floor(hours)}h${Math.floor(minutes)}m`;
	}
}
