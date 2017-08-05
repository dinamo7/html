(function ($) {

    var $form = $("#form");
    var $list = $("#list");
    var $STORE_MESSEGES_KEY =  "allMassages";
    var $allMessages = readFromLocalStorage();

    initializeListFromAllMessages();

    $($form).submit(function (e) {
        e.preventDefault();

        var $msg = this.elements.message.value;
        if ($msg) {
            addMessage($msg);
            this.elements.message.value = "";
        }
    });

    $($list).click(function (e) {
        var $li = findParentLi(e.target);

        if ($li) {
            var $index = $li.getAttribute("data-index");


            if ($index > -1) {
                $allMessages.splice($index, 1);
                storeMassages();
                updateListFromStorage();
            }
        }
    });

    function storeMassages() {
        localStorage[$STORE_MESSEGES_KEY] = JSON.stringify($allMessages);
    }

    function findParentLi(el) {
        if (!el) {
            return null
        }

        if(el.tagName === "LI") {
            return el;
        }

    }

    function addMessage($msg) {
        addMassageToDOM($msg);
        $allMessages.push($msg);

        storeMassages();

    }

    function  addMassageToDOM($msg) {

        var $item = document.createElement("li");
        $item.innerText = $msg;
        $item.setAttribute("data-index", $list.children.length);

        $list.appendChild($item);
    }

    function initializeListFromAllMessages() {
        for (var i = 0;i < $allMessages.length; i++) {
            var $currMsg = $allMessages[i];
            addMassageToDOM($currMsg);
        }
    }

    function readFromLocalStorage() {
        var $messagesJSONStr = localStorage[$STORE_MESSEGES_KEY];
        if ($messagesJSONStr) {
            return JSON.parse($messagesJSONStr);
        }
        return [];
    }

    function updateListFromStorage() {
        $list.innerHTML = "";
        $allMessages = readFromLocalStorage();
        initializeListFromAllMessages();
    }

    window.addEventListener("storage", function (e) {
        if (e.key === $STORE_MESSEGES_KEY){
            updateListFromStorage();
        }
    });

})(jQuery);