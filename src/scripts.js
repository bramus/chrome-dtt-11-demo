document.addEventListener('DOMContentLoaded', () => {
    // Basics
    document.getElementById('button-log-hello').addEventListener('click', () => {
        console.log('Hello 👋');
    });

    // Log Levels
    document.getElementById('button-loglevels-log').addEventListener('click', () => {
        console.log('I am logged using console.log()');
    });
    document.getElementById('button-loglevels-warn').addEventListener('click', () => {
        console.warn('I am logged using console.warn()');
    });
    document.getElementById('button-loglevels-error').addEventListener('click', () => {
        console.error('I am logged using console.error()');
    });

    // Variables
    let clickCount = 0;
    document.getElementById('button-variables-number').addEventListener('click', () => {
        console.log(`I was pressed ${++clickCount} times by now`);
    });
    document.getElementById('button-variables-object').addEventListener('click', () => {
        console.log({
            name: 'Bramus',
            role: 'DevRel',
            socials: {
                twitter: '@bramus',
                website: 'https://www.bram.us/',
            },
        });
    });
    document.getElementById('button-variables-array').addEventListener('click', () => {
        console.log(['Adam', 'Bramus', 'Jecelyn', 'Jhey', 'Una']);
    });

    // table & dir
    document.getElementById('button-formatted-table').addEventListener('click', () => {
        console.table([
            {
                first: 'Adam',
                twitter: '@argyleink',
            },
            {
                first: 'Bramus',
                twitter: '@bramus',
            },
            {
                first: 'Jecelyn',
                twitter: '@jecfish',
            },
            {
                first: 'Jhey',
                twitter: '@jh3yy',
            },
            {
                first: 'Una',
                twitter: '@una',
            },
        ]);
    });
    document.getElementById('button-formatted-dir').addEventListener('click', () => {
        console.log(document.head);
        console.dir(document.head);
    });

    // Grouping
    const labelStack = [];
    document.getElementById('button-grouping-group').addEventListener('click', () => {
        console.group();
        labelStack.push(null);
    });
    document.getElementById('button-grouping-groupend').addEventListener('click', () => {
        if (labelStack.length == 0) return;
        console.groupEnd(labelStack.pop());
    });
    document.getElementById('button-grouping-groupcollapsed').addEventListener('click', () => {
        console.groupCollapsed();
        labelStack.push(null);
    });
    document.getElementById('button-grouping-namedgroup').addEventListener('click', () => {
        const label = `Group ${+new Date()}`;
        console.group(label);
        labelStack.push(label);
    });
});
