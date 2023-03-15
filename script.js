    console.log('Downloading chat history...');

    const targetDivs = Array.from(document.querySelectorAll('div'))
        .filter(
            (div) =>
                div.classList.contains('relative') &&
                div.classList.contains('flex') &&
                div.classList.contains('flex-col') &&
                div.classList.contains('gap-1') &&
                div.classList.contains('md:gap-3') &&
                div.classList.contains('lg:w-[calc(100%-115px)]')
        );

    const chatHistory = targetDivs
        .map((div, index) => (index > 0 ? '<hr>' : '') + '\n\n' + div.outerHTML)
        .join('')
        .trim();

    const pageTitle = document.title;
    const blob = new Blob([chatHistory], {type: 'text/html'});
    const url = URL.createObjectURL(blob);
    const filename = pageTitle;

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
