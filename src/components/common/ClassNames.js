/**
 * Global constants for application
 */
const CLASSNAME = {
    BASE : 'html_resume',
    // class names for profile intro section.
    PROFILE_INTRO : {
        // main profile intro container
        container : function() {
           return CLASSNAME.BASE + '-profile-container';
        }
    }
}

export default CLASSNAME;