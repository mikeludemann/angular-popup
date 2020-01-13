import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'popup',
	templateUrl: './popup.component.html',
	styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

	@Input() defaulttext: string;
	@Input() popuptext: string;
	@Input() position: string;

	@ViewChild('popup', {static: false}) el: ElementRef;

	constructor() { }

	ngOnInit() {

		var popup = this.el.nativeElement;

		for (var i = 0; i < popup.length; i++) {

			popup[i].onclick = togglePopup(i);

		}

		function togglePopup(i) {

			return function () {

				if (popup[i].children[1].style.display == "none") {

					popup[i].children[1].style.display = "block";

				} else {

					popup[i].children[1].style.display = "none";

				}

			};

		}

	}

	ngAfterViewInit() {

		var style = document.createElement("style");
		style.type = "text/css";

		let styling =
		` 
		.popup {
			position: relative;
			margin: 100px auto;
			display: block;
			width: 125px;
			height: 100px;
			transition: opacity 0.3s;
		}

		.popup .popup-text-top {
			width: 125px;
			background-color: #555;
			color: #fff;
			text-align: center;
			border-radius: 5px;
			padding: 5px;
			position: absolute;
			z-index: 1;
			bottom: 100%;
			left: 45%;
			margin-left: -60px;
			display: none;
			transition: opacity 0.3s;
		}

		.popup .popup-text-top::after {
			content: "";
			position: absolute;
			top: 100%;
			left: 50%;
			margin-top: 0px;
			margin-left: -5px;
			border-width: 5px;
			border-style: solid;
			border-color: #555 transparent transparent transparent;
			transform: rotate(0deg);
		}

		.popup .popup-text-bottom {
			width: 125px;
			background-color: #555;
			color: #fff;
			text-align: center;
			border-radius: 5px;
			padding: 5px;
			position: absolute;
			z-index: 1;
			top: 170%;
			left: 45%;
			margin-left: -60px;
			display: none;
			transition: opacity 0.3s;
		}

		.popup .popup-text-bottom::after {
			content: "";
			position: absolute;
			bottom: 100%;
			left: 50%;
			margin-top: 0px;
			margin-left: -5px;
			border-width: 5px;
			border-style: solid;
			border-color: #555 transparent transparent transparent;
			transform: rotate(180deg);
		}

		.popup .popup-text-left {
			width: 125px;
			background-color: #555;
			color: #fff;
			text-align: center;
			border-radius: 5px;
			padding: 5px;
			position: absolute;
			z-index: 1;
			top: 0%;
			left: -70%;
			margin-left: -60px;
			display: none;
			transition: opacity 0.3s;
		}

		.popup .popup-text-left::after {
			content: "";
			position: absolute;
			top: 50%;
			right: -3.5%;
			margin-top: -5px;
			margin-right: -5px;
			border-width: 5px;
			border-style: solid;
			border-color: #555 transparent transparent transparent;
			transform: rotate(-90deg);
		}

		.popup .popup-text-right {
			width: 125px;
			background-color: #555;
			color: #fff;
			text-align: center;
			border-radius: 5px;
			padding: 5px;
			position: absolute;
			z-index: 1;
			top: 0%;
			right: -110%;
			margin-left: -60px;
			display: none;
			transition: opacity 0.3s;
		}

		.popup .popup-text-right::after {
			content: "";
			position: absolute;
			top: 50%;
			left: -7.5%;
			margin-top: -5px;
			margin-right: -5px;
			border-width: 5px;
			border-style: solid;
			border-color: #555 transparent transparent transparent;
			transform: rotate(90deg);
		}
		`

		style.innerHTML = styling;
		document.getElementsByTagName("head")[0].appendChild(style);

	}

}
