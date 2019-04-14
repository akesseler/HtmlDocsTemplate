
function setCopyright(selector) {

    if (selector) {

        let date = new Date();
        let year = date.getFullYear();
        let text = 'Copyright&nbsp;&copy;&nbsp;' + year + '&nbsp;<a href="http://www.plexdata.de" target="_blank">plexdata.de</a>';

        $(makeSelector(selector)).html(text);
    }
}

function makeSelector(value) {

    const hash = '#';

    if (value) {

        let index = value.indexOf(hash);

        if (index < 0) {
            return hash + value;
        }
    }

    return value;
}

function selectCaller(caller) {

    if (caller) {

        try {

            let parent = $(makeSelector('navigation'));

            if (parent) {

                $(parent).children('a').each(function () {
                    $(this).removeClass('selected');
                });

                if (typeof caller === "string") {
                    caller = makeSelector(caller);
                }

                $(caller).addClass('selected');
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}

function showContent(caller, chapter, section) {

    selectCaller(caller);

    if (chapter) {

        try {

            let target = makeSelector('content');

            $(target).load(chapter);

            $(target).ready(function () {

                // As first bring current target into view.
                $(target).scrollTop(0);

                if (section) {

                    section = makeSelector(section);

                    let offset = $(section).offset().top - $(target).offset().top;
                    $(target).scrollTop(offset);
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }

    return false;
}
