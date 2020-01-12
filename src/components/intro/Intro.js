import React, { h } from "preact";
import GLOBAL from "../common/global";

function ProfileIntro() {

    return h(
        'section',
        {
            class: GLOBAL.CLASSNAME.PROFILE_INTRO.container()
        },
        "Profile...."
    )
}

export default ProfileIntro;
