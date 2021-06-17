function listen() {
    document.onkeydown = checkKey;
}

function checkKey(event) {
    if (event.keyCode === 37) {
        change_dia(-1);
    }
    else if (event.keyCode === 39)
    {
        change_dia(1);
    }
}

function change_dia(diff) {
    let changed = parseInt(document.getElementById('dia').dataset.number) + diff;
    changed = validate_key(changed);
    fetch(`/change_dia/${changed}`)
      .then(response => response.json())
      .then(image => {
          console.log(image);
          document.getElementById('dia').src = image;
          document.getElementById('dia').dataset.number = changed.toString();
      });
}

function validate_key(changed) {
    if (changed < 0) {
        changed = 0;
    }
    else if (changed > 6) {
        changed = 6;
    }
    return changed
}

function main() {
    listen();
}

main();