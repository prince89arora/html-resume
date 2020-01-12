import React, { h } from "preact";
import ProfileIntro from "./intro/Intro"
import GLOBAL from "./common/global"

function Base() {

	return (
		<div 
			className={GLOBAL.CLASSNAME.BASE}>
			<ProfileIntro />	
		</div>
	);
}

export default Base;