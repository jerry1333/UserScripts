// ==UserScript==
// @name         YouTube Polymer UI Fix
// @namespace    http://malcom.pl/
// @version      0.1.0
// @description  Fix shitty Polymer UI render on YouTube Homepage
// @author       Malcom <me@malcom.pl>
// @license      The MIT License; http://opensource.org/licenses/MIT
// @downloadURL  https://github.com/malcom/UserScripts/raw/master/youtube-polymer-ui-fix.user.js
// @match        https://www.youtube.com/
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
	'use strict';

	const style = document.createElement('style');
	style.textContent = `
		.rich-grid-video-skeleton {
			flex-basis: 210px !important;
			min-width: 210px !important;
			max-width: 210px !important;
			margin: 0 4px 0 0 !important;
		}
		.rich-grid-video-skeleton .channel-avatar {
			display: none;
		}
		.rich-grid-video-skeleton .rich-video-title {
			width: 100% !important;
		}
		.rich-grid-video-skeleton .rich-video-meta {
			width: 70% !important;
		}
		ytd-rich-grid-renderer {
			--ytd-rich-grid-items-per-row: 6 !important;
			--ytd-rich-grid-posts-per-row: 4 !important;
			--ytd-rich-grid-item-margin: 4px !important;
			--ytd-rich-grid-item-min-width: 210px !important;
			--ytd-rich-grid-item-max-width: 210px !important;
			--ytd-rich-grid-mini-item-min-width: 210px !important;
			--ytd-rich-grid-mini-item-max-width: 210px !important;
		}
		ytd-rich-grid-renderer #title {
			font-size: var(--ytd-subheadline-link_-_font-size) !important;
			font-weight: var(--ytd-subheadline-link_-_font-weight) !important;
			line-height: var(--ytd-subheadline-link_-_line-height) !important;
		}
		ytd-rich-item-renderer #video-title {
			font-size: var(--ytd-grid-video-title_-_font-size) !important;
			font-weight: var(--ytd-grid-video-title_-_font-weight) !important;
			line-height: var(--ytd-grid-video-title_-_line-height) !important;
		}
		ytd-rich-item-renderer #avatar-link {
			display: none;
		}
		ytd-rich-item-renderer .ytd-video-meta-block {
			font-size: var(--ytd-thumbnail-attribution_-_font-size) !important;
			font-weight: var(--ytd-thumbnail-attribution_-_font-weight) !important;
			line-height: var(--ytd-thumbnail-attribution_-_line-height) !important;
		}
	`;
	document.head.appendChild(style);

})();