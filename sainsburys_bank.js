function displayCSV(csv_data)
{
    prompt("Ctrl-C to copy, then Import Sainsburys on spreadsheet:", csv_data)
    return
}

function parseSainsburysPage()
{
    //regex matching transactions on the 'search for transactions' page
    search_re = /.*<td data-coltype="date">(.*)<\/td>\n\s*<td data-coltype="description">\n\s*(.*)\n\s*<p class="collapse-bottom collapse-top"><\/p>\n\s*<\/td>\n\s*<td data-coltype="amount">\n\s*\n\s*&#163;([0-9.]*)\n\s*<\/td>/img

    //regex matching transactions on the 'recent transactions' page
    recent_re = /.*<td data-coltype="date">(.*)<\/td>\n\s*<td data-coltype="description">(.*)<\/td>\n\s*<td data-coltype="amount">\n\s*&#163;([0-9.]*)\n\s*<\/td>/img
    
    date_re = /.*<td data-coltype="date">(.*)<\/td>\n\s*<td data-coltype="description">(.*)<\/td>\n\s*<td data-coltype="amount">\n\s*/img
    
    //regex combining the two above by adding optional non-capturing groups to handle the
    //extra cruft in the transaction search HTML
    universal_re = /.*<td data-coltype="date">(.*)<\/td>\n\s*<td data-coltype="description">(.*)(?:<p class="collapse-bottom collapse-top"><\/p>\n\s*)?<\/td>\n\s*<td data-coltype="amount">\n\s*(?:\n\s*)?&#163;([0-9.]*)\n\s*<\/td>/img
    
    src = document.getElementsByTagName('html')[0].innerHTML;
    
    result = date_re.exec(src)
    console.log( JSON.stringify(result) )
    while (result)
    {
        console.log("Matched a result")
        console.log(result[0])
        result = date_re.exec(src)
    }   
}

parseSainsburysPage();
