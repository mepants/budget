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
    //hiyaaaaa!

exampleHTML = `
<!DOCTYPE html>
<html lang="en" class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Sainsbury&#39;s Bank Servicing - My Account</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=no">
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />        
        <link href="/servicing/content/css/jquery-ui-themes-1.12.1-custom/jquery-ui.css" rel="stylesheet"/>
<link href="/servicing/content/css/main.css" rel="stylesheet"/>
<link href="/servicing/content/css/print.css" rel="stylesheet"/>
<link href="/servicing/content/css/responsive.css" rel="stylesheet"/>

        <link rel="shortcut icon" href="/servicing/content/img/favicon.ico" />
        
        <script src="/servicing/scripts/vendor/modernizr.custom.js"></script>

        <script src="/servicing/Scripts/vendor/modernizr-2.6.2.min.js"></script>
        <script src="/servicing/Scripts/vendor/jquery-1.12.4.js"></script>
        <script src="/servicing/Scripts/vendor/jquery.session.js"></script>
        <script src="/servicing/Scripts/vendor/sammy-0.7.4.min.js"></script>
        <script src="/servicing/Scripts/vendor/magnific-0.9.5.min.js"></script>
        <script src="/servicing/Scripts/decimal.js"></script>
        <script src="/servicing/Scripts/responsive.js"></script>
        <script src="/servicing/Scripts/main.js"></script>
        <script src="/servicing/Scripts/portal.js"></script>
        <script src="/servicing/Scripts/apple.js"></script>

        
        <script src="/servicing/scripts/vendor/jquery-ui-1.12.1-custom/jquery-ui.js"></script>
        <script type="text/javascript" src="//s.btstatic.com/tag.js">{site: "2ogia2u", mode: "sync" }</script>

        <script type="text/javascript">
            var utag_data = {
            }
        </script>

        <!-- Loading script asynchronously -->
        <script type="text/javascript">
                (function (a, b, c, d) {
                    a = '//tags.tiqcdn.com/utag/sainsburysbank/main/prod/utag.js';
                    b = document; c = 'script'; d = b.createElement(c); d.src = a; d.type = 'text/java' + c; d.async = true;
                    a = b.getElementsByTagName(c)[0]; a.parentNode.insertBefore(d, a);
                })();
        </script>

    </head>

    <body  data-behaviour="monitorTimeout" data-options="{'timeoutUrl': '/servicing/servicing/home/timeout', 'extendUrl': '/servicing/servicing/home/extend', 'signoutUrl':'/servicing/servicing/signout'}" class="bg-container">
               
<noscript>
  <iframe src="//s.thebrighttag.com/iframe?c=2ogia2u" width="1" height="1" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
</noscript>





    <div class="hide page-warning alert alert-warning">
            <i class="page-warning-icon icon-fixed-width icon-exclamation-sign icon-2x"></i>
            <span style="padding: 0 10px 0 10px">For security reasons, this page will timeout in <span class="page-timeout-seconds">' + seconds + '</span> seconds. 
                Would you like more time?</span>
            <a href="#" class="btn btn-primary btn-small page-timeout-continue">Yes</a>
            <a href="#" class="btn btn-small sign-out">No</a>
        </div>


        <div id="uber-wrapper" class="dashboard bg-container">
            <div class="container box-shadow">
                


<header>
    <div class="logo desktop-logo" title="Sainsbury Bank"></div>
    <div class="logo mobile-logo" title="Sainsbury Bank"></div>

    <a href="#uber-wrapper" class="mobile-side-menu-trigger" alt="Toggle navigation menu" title="Toggle navigation menu" tabindex="1" aria-labelledby="Toggle navigation menu">
        <i class="icon-reorder icon-3x icon-black" aria-labelledby="Toggle navigation menu">                                                                 
        </i>
    </a>
        <div class="user-data">
            <div class="user-info">
                <span class="name">Hello CRAIG GALLAGHER</span>
                    <span class="last-logged-in">You last logged in on 22 Apr 2019 at  16:53</span>
            </div>
        </div>
        <nav class="sign-out" data-behaviour="mobile-hide">
        <p class="pull-left">
            <strong>
                <a href="http://www.sainsburysbank.co.uk/insuring/support/customer_support_zone" style="padding-right:15px" target="_blank">Need help?</a>
            </strong>
        </p>
            <a href="/servicing/servicing/signout" class="btn btn-primary btn-sign-out"><i class="icon-signout"></i> Log out</a>
        </nav>
</header>



            </div>
            <div class="main-wrapper" role="main">



        <nav>
            <div class="nav-top box-shadow">
                <ul id="top-nav">
                        <li class="on"><a id="lnkMyAccounts" href="/servicing/servicing/my-accounts">My accounts</a></li>
                        <li class=""><a id="lnkTwoWayMessaging" href="/servicing/servicing/twowaymessaging">Messages 
</a></li>
                        <li class=""><a id="lnkMyDetails" href="/servicing/servicing/my-details">My details</a></li>
                        <li class=""><a id="lnkApply" href="/servicing/servicing/product/savings">Apply</a></li>
                </ul>
            </div>
        </nav>

<script>
    function SelfCertifyOpen() {
        var popupId = '#self-certify', $popup = $(popupId);
        if ($popup.is(':hidden')) {
            wrapPopup(true);
            $.magnificPopup.open({
                items: {
                    src: popupId,
                },
                type: 'inline',
                callbacks: {
                    close: function () {
                        wrapPopup(false);
                    }
                },
                closeOnBgClick: false
            }, 0);
            $popup.removeClass('hide').find('.collapsible').show();
            return false;
        } else {
            return false;
        }
    }

    var wrapPopup = function (wrapit) {
        var $wrapinform = $('#saveapp');
        if (wrapit) {
            if (!$wrapinform.parent().is('form')) {
                $wrapinform.wrap('<form></form>');
            }
        } else {
            if ($wrapinform.parent().is('form')) {
                $wrapinform.unwrap();
            }
        }
    };
</script>                <div class="container">

                    <article>
                        <section class="box-shadow">
                            
                            





<div class="grid-column8 account-list-container">
    


        


    <div class="alert alert-error alert-icon-big hide">
        <p>
        An error occurred while retrieving the account information.<p>
    </div>
    
    <div class="page-header">
        <h1>My accounts</h1>
    </div>
 

        <div id="CrrqcbRBoNno2rgz7ZCzJxCrd1OgZXud8kOtxZHhDyc=">


<div class="account-block account-header" data-behaviour="selectAccount">
         <div class="account-summary classic-extra mobile-no-bg-image">
    <h2>Sainsbury’s Bank Credit Card</h2>
    <p class="card-ending">Card ending: <strong>8621</strong></p>

        <p class="payment-due-date">
            Payment due date:
            <strong>
19 April 2019            </strong>
        </p>
</div>
     
<dl class="account-balance">
    <dt class="current">Current balance</dt>
    <dd class="current">&#163;5,082.74</dd>
    <dt class="available">Available to spend:</dt>
    <dd class="available">&#163;3,897.28</dd>
    <dt class="overdraft">Credit limit:</dt>
    <dd class="overdraft">&#163;9,000.00</dd>
</dl>

</div>






<div class="account-transactions" id="trans_8621" role="region" tabindex="-1">

            <table class="account-transactions-table table table-striped table-hover" >
                <caption >Your most recent transactions (excluding any pending transactions):</caption>    
                    <thead data-account="CrrqcbRBoNno2rgz7ZCzJxCrd1OgZXud8kOtxZHhDyc_.//8BAgsAAABTQllfUFJPRF9TV4AAAABEkNrYNRRUzX/cEHBGlV2ApWNOsjg/HFpePlETEFIhIv5CvZ1yiHt8wBPoWN3kJEGjQWo+hpNs+gRalN2y4KpXdQGjO0ISAnM6QfoEH9z8SbDP2M1Wc246iNbvc0ABNv69Z1p97eXt2Vv+xHfi79Nzf83R5NMA/AEDPN8vTMk1NxAAAAAZcgJRLjKC+f31enXtwlmH4AAAAGiCPzGgFS/mcFnuPlmfCEV3GwmghwMFTvaKb/eKkREArA6H0F4W+6ozEWwJi6orveiDFDtnuEG+76L74UpWXBVSjdfVBfK3Sj5YVIFpIfy2TOofgoVDda9+Ea3b7HLBxwrCfi6GxTgxue8yS2CqpM7W/mRfT0oKqDdkHh3M5NlBMFL62QWYivIxeK6jcKMDRZejoAXtrLLMYwuQPr9srnOyYzAkFyVd4wVYYcoK8oDrZwiGnfxpdAei2lLeOdjn8eaydmy6G7tEsEjt7ku14HBye9Dc5pcuKP4NgTLKWzOv" data-product-type="card" data-action="/servicing/servicing/accounts/transaction">
        <tr>
            <th data-coltype="date">
                <a href="/servicing/servicing/my-accounts?key=CrrqcbRBoNno2rgz7ZCzJxCrd1OgZXud8kOtxZHhDyc_.%2f%2f8BAgsAAABTQllfUFJPRF9TV4AAAAAlB4H26zu62Nz03YPU6fSV8qajwJKbYio9An3z%2flMJO%2fGH5lyIadDo5MWsSiG5uY%2bTRq9Fjg9WbLk%2bSzcrlV3POmIl%2f8kaHCbHG2OwGN9sBKzc6bQYJLPziCdYzrk9KFZQNAGzgOuOe2ibperG9rwiDhAz2FAlttAYCYlP7o2F5xAAAADkhPkcYu4SbdtE0f83o%2bgT4AAAAPcy%2fXT3NKTxp3qbkJZD7JW5YD7hHpILd1ArQ8oP2XEvRPlSdcV0Hvm2h9JQXZ3fIZDE0556Thx2xOD9uJFa8MPTaR%2b4VH9My8sDlcbuhYODbG6MPSzUOXjQIVpUTPryRW7N63CuT3K5YEX7ZGpaxm%2bTjGRIYmXVGCHWCTmzqp7AuM9jMmBRQYYFx9pIJ2XHMlor06j8HQUl6lZff8oV2s60F91fEA%2bV2yvpDYyPyC3sSa7AUPj5bEGYanbxPKXtG3fTt4pQRKJQ5EbJeOMZkWapNhVLYU03F5aNVIKTXWld&amp;showMoreLink=True&amp;reversed=true" class="sainsburybank-link">Date <span class="visuallyhidden"> descending</span>
                    <i aria-hidden="true" class="icon-arrow-down"></i>
                </a>
            </th>
            <th data-coltype="description">Description</th>
                <th data-coltype="amount">Amount</th>
                    </tr>
    </thead>

                <tbody>
    <tr class="no-transaction-details  card" data-behaviour="" data-transaction-id="">
        <td data-coltype="date">08 Apr 19</td>
        <td data-coltype="description">WASABI CANARY WHARF LONDON</td>
        <td data-coltype="amount">
                        &#163;6.40
        </td>
    </tr>
    <tr class="transaction-details hide">
        <td colspan="4" data-account="CrrqcbRBoNno2rgz7ZCzJxCrd1OgZXud8kOtxZHhDyc_.//8BAgsAAABTQllfUFJPRF9TV4AAAABEkNrYNRRUzX/cEHBGlV2ApWNOsjg/HFpePlETEFIhIv5CvZ1yiHt8wBPoWN3kJEGjQWo+hpNs+gRalN2y4KpXdQGjO0ISAnM6QfoEH9z8SbDP2M1Wc246iNbvc0ABNv69Z1p97eXt2Vv+xHfi79Nzf83R5NMA/AEDPN8vTMk1NxAAAAAZcgJRLjKC+f31enXtwlmH4AAAAGiCPzGgFS/mcFnuPlmfCEV3GwmghwMFTvaKb/eKkREArA6H0F4W+6ozEWwJi6orveiDFDtnuEG+76L74UpWXBVSjdfVBfK3Sj5YVIFpIfy2TOofgoVDda9+Ea3b7HLBxwrCfi6GxTgxue8yS2CqpM7W/mRfT0oKqDdkHh3M5NlBMFL62QWYivIxeK6jcKMDRZejoAXtrLLMYwuQPr9srnOyYzAkFyVd4wVYYcoK8oDrZwiGnfxpdAei2lLeOdjn8eaydmy6G7tEsEjt7ku14HBye9Dc5pcuKP4NgTLKWzOv" data-transaction-id=""></td>
    </tr>
    <tr class="no-transaction-details odd card" data-behaviour="" data-transaction-id="">
        <td data-coltype="date">08 Apr 19</td>
        <td data-coltype="description">MARKS&amp;SPENCER PLC SA WIMBLEDON GBR</td>
        <td data-coltype="amount">
                        &#163;5.30
        </td>
    </tr>
    <tr class="transaction-details hide">
        <td colspan="4" data-account="CrrqcbRBoNno2rgz7ZCzJxCrd1OgZXud8kOtxZHhDyc_.//8BAgsAAABTQllfUFJPRF9TV4AAAABEkNrYNRRUzX/cEHBGlV2ApWNOsjg/HFpePlETEFIhIv5CvZ1yiHt8wBPoWN3kJEGjQWo+hpNs+gRalN2y4KpXdQGjO0ISAnM6QfoEH9z8SbDP2M1Wc246iNbvc0ABNv69Z1p97eXt2Vv+xHfi79Nzf83R5NMA/AEDPN8vTMk1NxAAAAAZcgJRLjKC+f31enXtwlmH4AAAAGiCPzGgFS/mcFnuPlmfCEV3GwmghwMFTvaKb/eKkREArA6H0F4W+6ozEWwJi6orveiDFDtnuEG+76L74UpWXBVSjdfVBfK3Sj5YVIFpIfy2TOofgoVDda9+Ea3b7HLBxwrCfi6GxTgxue8yS2CqpM7W/mRfT0oKqDdkHh3M5NlBMFL62QWYivIxeK6jcKMDRZejoAXtrLLMYwuQPr9srnOyYzAkFyVd4wVYYcoK8oDrZwiGnfxpdAei2lLeOdjn8eaydmy6G7tEsEjt7ku14HBye9Dc5pcuKP4NgTLKWzOv" data-transaction-id=""></td>
    </tr>
    <tr class="no-transaction-details  card" data-behaviour="" data-transaction-id="">
        <td data-coltype="date">08 Apr 19</td>
        <td data-coltype="description">TFL TRAVEL CH TFL.GOV.UK/CP</td>
        <td data-coltype="amount">
                        &#163;10.90
        </td>
    </tr>
    <tr class="transaction-details hide">
        <td colspan="4" data-account="CrrqcbRBoNno2rgz7ZCzJxCrd1OgZXud8kOtxZHhDyc_.//8BAgsAAABTQllfUFJPRF9TV4AAAABEkNrYNRRUzX/cEHBGlV2ApWNOsjg/HFpePlETEFIhIv5CvZ1yiHt8wBPoWN3kJEGjQWo+hpNs+gRalN2y4KpXdQGjO0ISAnM6QfoEH9z8SbDP2M1Wc246iNbvc0ABNv69Z1p97eXt2Vv+xHfi79Nzf83R5NMA/AEDPN8vTMk1NxAAAAAZcgJRLjKC+f31enXtwlmH4AAAAGiCPzGgFS/mcFnuPlmfCEV3GwmghwMFTvaKb/eKkREArA6H0F4W+6ozEWwJi6orveiDFDtnuEG+76L74UpWXBVSjdfVBfK3Sj5YVIFpIfy2TOofgoVDda9+Ea3b7HLBxwrCfi6GxTgxue8yS2CqpM7W/mRfT0oKqDdkHh3M5NlBMFL62QWYivIxeK6jcKMDRZejoAXtrLLMYwuQPr9srnOyYzAkFyVd4wVYYcoK8oDrZwiGnfxpdAei2lLeOdjn8eaydmy6G7tEsEjt7ku14HBye9Dc5pcuKP4NgTLKWzOv" data-transaction-id=""></td>
    </tr>
    <tr class="no-transaction-details odd card" data-behaviour="" data-transaction-id="">
        <td data-coltype="date">05 Apr 19</td>
        <td data-coltype="description">ARGOS LTD KINGSTON U TH</td>
        <td data-coltype="amount">
                        &#163;64.10
        </td>
    </tr>
    <tr class="transaction-details hide">
        <td colspan="4" data-account="CrrqcbRBoNno2rgz7ZCzJxCrd1OgZXud8kOtxZHhDyc_.//8BAgsAAABTQllfUFJPRF9TV4AAAABEkNrYNRRUzX/cEHBGlV2ApWNOsjg/HFpePlETEFIhIv5CvZ1yiHt8wBPoWN3kJEGjQWo+hpNs+gRalN2y4KpXdQGjO0ISAnM6QfoEH9z8SbDP2M1Wc246iNbvc0ABNv69Z1p97eXt2Vv+xHfi79Nzf83R5NMA/AEDPN8vTMk1NxAAAAAZcgJRLjKC+f31enXtwlmH4AAAAGiCPzGgFS/mcFnuPlmfCEV3GwmghwMFTvaKb/eKkREArA6H0F4W+6ozEWwJi6orveiDFDtnuEG+76L74UpWXBVSjdfVBfK3Sj5YVIFpIfy2TOofgoVDda9+Ea3b7HLBxwrCfi6GxTgxue8yS2CqpM7W/mRfT0oKqDdkHh3M5NlBMFL62QWYivIxeK6jcKMDRZejoAXtrLLMYwuQPr9srnOyYzAkFyVd4wVYYcoK8oDrZwiGnfxpdAei2lLeOdjn8eaydmy6G7tEsEjt7ku14HBye9Dc5pcuKP4NgTLKWzOv" data-transaction-id=""></td>
    </tr>
    <tr class="no-transaction-details  card" data-behaviour="" data-transaction-id="">
        <td data-coltype="date">05 Apr 19</td>
        <td data-coltype="description">PRIMARK KINGSTON U TH</td>
        <td data-coltype="amount">
                        &#163;18.00
        </td>
    </tr>
    <tr class="transaction-details hide">
        <td colspan="4" data-account="CrrqcbRBoNno2rgz7ZCzJxCrd1OgZXud8kOtxZHhDyc_.//8BAgsAAABTQllfUFJPRF9TV4AAAABEkNrYNRRUzX/cEHBGlV2ApWNOsjg/HFpePlETEFIhIv5CvZ1yiHt8wBPoWN3kJEGjQWo+hpNs+gRalN2y4KpXdQGjO0ISAnM6QfoEH9z8SbDP2M1Wc246iNbvc0ABNv69Z1p97eXt2Vv+xHfi79Nzf83R5NMA/AEDPN8vTMk1NxAAAAAZcgJRLjKC+f31enXtwlmH4AAAAGiCPzGgFS/mcFnuPlmfCEV3GwmghwMFTvaKb/eKkREArA6H0F4W+6ozEWwJi6orveiDFDtnuEG+76L74UpWXBVSjdfVBfK3Sj5YVIFpIfy2TOofgoVDda9+Ea3b7HLBxwrCfi6GxTgxue8yS2CqpM7W/mRfT0oKqDdkHh3M5NlBMFL62QWYivIxeK6jcKMDRZejoAXtrLLMYwuQPr9srnOyYzAkFyVd4wVYYcoK8oDrZwiGnfxpdAei2lLeOdjn8eaydmy6G7tEsEjt7ku14HBye9Dc5pcuKP4NgTLKWzOv" data-transaction-id=""></td>
    </tr>
                </tbody>
            </table>
            <form>
                <fieldset>
                    <a href="/servicing/servicing/my-accounts?key=CrrqcbRBoNno2rgz7ZCzJxCrd1OgZXud8kOtxZHhDyc_.%2F%2F8BAgsAAABTQllfUFJPRF9TV4AAAABEkNrYNRRUzX%2FcEHBGlV2ApWNOsjg%2FHFpePlETEFIhIv5CvZ1yiHt8wBPoWN3kJEGjQWo%2BhpNs%2BgRalN2y4KpXdQGjO0ISAnM6QfoEH9z8SbDP2M1Wc246iNbvc0ABNv69Z1p97eXt2Vv%2BxHfi79Nzf83R5NMA%2FAEDPN8vTMk1NxAAAAAZcgJRLjKC%2Bf31enXtwlmH4AAAAGiCPzGgFS%2FmcFnuPlmfCEV3GwmghwMFTvaKb%2FeKkREArA6H0F4W%2B6ozEWwJi6orveiDFDtnuEG%2B76L74UpWXBVSjdfVBfK3Sj5YVIFpIfy2TOofgoVDda9%2BEa3b7HLBxwrCfi6GxTgxue8yS2CqpM7W%2FmRfT0oKqDdkHh3M5NlBMFL62QWYivIxeK6jcKMDRZejoAXtrLLMYwuQPr9srnOyYzAkFyVd4wVYYcoK8oDrZwiGnfxpdAei2lLeOdjn8eaydmy6G7tEsEjt7ku14HBye9Dc5pcuKP4NgTLKWzOv&amp;showMoreLink=False#CrrqcbRBoNno2rgz7ZCzJxCrd1OgZXud8kOtxZHhDyc=" class="btn-link-more" aria-controls="trans_8621" aria-expanded="true"><i class="icon-minus-sign icon-large"></i><span class="visuallyhidden">Sainsbury’s Bank Credit Card Recent transactions</span><span aria-hidden="true">Hide recent transactions</span></a>
                        <a href="/servicing/servicing/my-card-account?key=CrrqcbRBoNno2rgz7ZCzJxCrd1OgZXud8kOtxZHhDyc_.%2F%2F8BAgsAAABTQllfUFJPRF9TV4AAAABEkNrYNRRUzX%2FcEHBGlV2ApWNOsjg%2FHFpePlETEFIhIv5CvZ1yiHt8wBPoWN3kJEGjQWo%2BhpNs%2BgRalN2y4KpXdQGjO0ISAnM6QfoEH9z8SbDP2M1Wc246iNbvc0ABNv69Z1p97eXt2Vv%2BxHfi79Nzf83R5NMA%2FAEDPN8vTMk1NxAAAAAZcgJRLjKC%2Bf31enXtwlmH4AAAAGiCPzGgFS%2FmcFnuPlmfCEV3GwmghwMFTvaKb%2FeKkREArA6H0F4W%2B6ozEWwJi6orveiDFDtnuEG%2B76L74UpWXBVSjdfVBfK3Sj5YVIFpIfy2TOofgoVDda9%2BEa3b7HLBxwrCfi6GxTgxue8yS2CqpM7W%2FmRfT0oKqDdkHh3M5NlBMFL62QWYivIxeK6jcKMDRZejoAXtrLLMYwuQPr9srnOyYzAkFyVd4wVYYcoK8oDrZwiGnfxpdAei2lLeOdjn8eaydmy6G7tEsEjt7ku14HBye9Dc5pcuKP4NgTLKWzOv" class="btn btn-primary pull-right "><span class="visuallyhidden">Sainsbury’s Bank Credit Card</span><span>Account details</span></a>
                        <a href="/servicing/servicing/paycreditcard?key=CrrqcbRBoNno2rgz7ZCzJxCrd1OgZXud8kOtxZHhDyc_.%2F%2F8BAgsAAABTQllfUFJPRF9TV4AAAABEkNrYNRRUzX%2FcEHBGlV2ApWNOsjg%2FHFpePlETEFIhIv5CvZ1yiHt8wBPoWN3kJEGjQWo%2BhpNs%2BgRalN2y4KpXdQGjO0ISAnM6QfoEH9z8SbDP2M1Wc246iNbvc0ABNv69Z1p97eXt2Vv%2BxHfi79Nzf83R5NMA%2FAEDPN8vTMk1NxAAAAAZcgJRLjKC%2Bf31enXtwlmH4AAAAGiCPzGgFS%2FmcFnuPlmfCEV3GwmghwMFTvaKb%2FeKkREArA6H0F4W%2B6ozEWwJi6orveiDFDtnuEG%2B76L74UpWXBVSjdfVBfK3Sj5YVIFpIfy2TOofgoVDda9%2BEa3b7HLBxwrCfi6GxTgxue8yS2CqpM7W%2FmRfT0oKqDdkHh3M5NlBMFL62QWYivIxeK6jcKMDRZejoAXtrLLMYwuQPr9srnOyYzAkFyVd4wVYYcoK8oDrZwiGnfxpdAei2lLeOdjn8eaydmy6G7tEsEjt7ku14HBye9Dc5pcuKP4NgTLKWzOv&amp;producttype=card" class="btn btn-primary pull-right "><span class="visuallyhidden">Sainsbury’s Bank Credit Card</span><span>Make a payment</span></a>
                </fieldset>
            </form>        

</div>

<script>
   var key = 'trans_' + '8621';
   $("#" + key).focus();
</script>


<div class="account-content-more hide" id="singleAccShow">
    <form>
        <fieldset>
          
            <a href="/servicing/servicing/my-accounts?key=CrrqcbRBoNno2rgz7ZCzJxCrd1OgZXud8kOtxZHhDyc_.%2F%2F8BAgsAAABTQllfUFJPRF9TV4AAAABEkNrYNRRUzX%2FcEHBGlV2ApWNOsjg%2FHFpePlETEFIhIv5CvZ1yiHt8wBPoWN3kJEGjQWo%2BhpNs%2BgRalN2y4KpXdQGjO0ISAnM6QfoEH9z8SbDP2M1Wc246iNbvc0ABNv69Z1p97eXt2Vv%2BxHfi79Nzf83R5NMA%2FAEDPN8vTMk1NxAAAAAZcgJRLjKC%2Bf31enXtwlmH4AAAAGiCPzGgFS%2FmcFnuPlmfCEV3GwmghwMFTvaKb%2FeKkREArA6H0F4W%2B6ozEWwJi6orveiDFDtnuEG%2B76L74UpWXBVSjdfVBfK3Sj5YVIFpIfy2TOofgoVDda9%2BEa3b7HLBxwrCfi6GxTgxue8yS2CqpM7W%2FmRfT0oKqDdkHh3M5NlBMFL62QWYivIxeK6jcKMDRZejoAXtrLLMYwuQPr9srnOyYzAkFyVd4wVYYcoK8oDrZwiGnfxpdAei2lLeOdjn8eaydmy6G7tEsEjt7ku14HBye9Dc5pcuKP4NgTLKWzOv&amp;showMoreLink=True#CrrqcbRBoNno2rgz7ZCzJxCrd1OgZXud8kOtxZHhDyc=" class="btn-link-more" aria-controls="trans_8621" aria-expanded="false"><i class="icon-plus-sign icon-large"></i><span class="visuallyhidden">Sainsbury’s Bank Credit Card Recent transactions</span><span aria-hidden="true">Show recent transactions</span></a>
    <a href="/servicing/servicing/my-card-account?key=CrrqcbRBoNno2rgz7ZCzJxCrd1OgZXud8kOtxZHhDyc_.%2F%2F8BAgsAAABTQllfUFJPRF9TV4AAAABEkNrYNRRUzX%2FcEHBGlV2ApWNOsjg%2FHFpePlETEFIhIv5CvZ1yiHt8wBPoWN3kJEGjQWo%2BhpNs%2BgRalN2y4KpXdQGjO0ISAnM6QfoEH9z8SbDP2M1Wc246iNbvc0ABNv69Z1p97eXt2Vv%2BxHfi79Nzf83R5NMA%2FAEDPN8vTMk1NxAAAAAZcgJRLjKC%2Bf31enXtwlmH4AAAAGiCPzGgFS%2FmcFnuPlmfCEV3GwmghwMFTvaKb%2FeKkREArA6H0F4W%2B6ozEWwJi6orveiDFDtnuEG%2B76L74UpWXBVSjdfVBfK3Sj5YVIFpIfy2TOofgoVDda9%2BEa3b7HLBxwrCfi6GxTgxue8yS2CqpM7W%2FmRfT0oKqDdkHh3M5NlBMFL62QWYivIxeK6jcKMDRZejoAXtrLLMYwuQPr9srnOyYzAkFyVd4wVYYcoK8oDrZwiGnfxpdAei2lLeOdjn8eaydmy6G7tEsEjt7ku14HBye9Dc5pcuKP4NgTLKWzOv" id="btnAccDetails" class="btn btn-primary pull-right " class="info-message" data-rel="tooltip"
       title=""><span class="visuallyhidden">Sainsbury’s Bank Credit Card</span><span>Account details</span></a>
    <a href="/servicing/servicing/paycreditcard?key=CrrqcbRBoNno2rgz7ZCzJxCrd1OgZXud8kOtxZHhDyc_.%2F%2F8BAgsAAABTQllfUFJPRF9TV4AAAABEkNrYNRRUzX%2FcEHBGlV2ApWNOsjg%2FHFpePlETEFIhIv5CvZ1yiHt8wBPoWN3kJEGjQWo%2BhpNs%2BgRalN2y4KpXdQGjO0ISAnM6QfoEH9z8SbDP2M1Wc246iNbvc0ABNv69Z1p97eXt2Vv%2BxHfi79Nzf83R5NMA%2FAEDPN8vTMk1NxAAAAAZcgJRLjKC%2Bf31enXtwlmH4AAAAGiCPzGgFS%2FmcFnuPlmfCEV3GwmghwMFTvaKb%2FeKkREArA6H0F4W%2B6ozEWwJi6orveiDFDtnuEG%2B76L74UpWXBVSjdfVBfK3Sj5YVIFpIfy2TOofgoVDda9%2BEa3b7HLBxwrCfi6GxTgxue8yS2CqpM7W%2FmRfT0oKqDdkHh3M5NlBMFL62QWYivIxeK6jcKMDRZejoAXtrLLMYwuQPr9srnOyYzAkFyVd4wVYYcoK8oDrZwiGnfxpdAei2lLeOdjn8eaydmy6G7tEsEjt7ku14HBye9Dc5pcuKP4NgTLKWzOv&amp;producttype=card" class="btn btn-primary pull-right make-a-payment-button " class="info-message" data-rel="tooltip"
       title=""><span class="visuallyhidden">Sainsbury’s Bank Credit Card</span><span>Make a payment</span></a>
        </fieldset>
    </form>
</div>


        </div>
</div>









<aside class="grid-column4 account-sidebar sidebar-myaccount">

    <div class="widget widget-link">
        <h2>
            <i class="icon-info-circle icon-2x  icon-fixed-width" title="Information"></i>
            <span>Noticeboard</span>
        </h2>
        <div class="body noticeboard" style="display: block;">
            Welcome to Online Banking. You can manage your account(s), change your personal details and send us a message now you’re logged in.
        </div>
    </div>


    <!--
    <div class="widget widget-link">
        <h2>
            <a href="/servicing/servicing/my-alerts" class="toggle" title="Alerts"><i class="icon-circle-arrow-right icon-large"></i></a>
            <i class="icon-bell-alt icon-2x  icon-fixed-width"></i>
            <span class="title">Alerts</span>
            <small>Keep track of your money with automatic text and email alerts</small>
        </h2>

    </div>
     -->
    <div class="widget widget-link help-and-faq">
        <h2>
            <i class="icon-question-sign icon-2x  icon-fixed-width" title="Question mark"></i>
            <span class="title">Help &amp; FAQs</span>
            <br />
            <a href="http://www.sainsburysbank.co.uk/insuring/support/customer_support_zone" class="toggle sainsburybank-link need-help-link-container" target="_blank" title="Help">
                <small class="sainsburybank-link need-help-link">Need help with something?</small>
                <i class="icon-caret-right icon-large sainsburybank-link"></i>
            </a>
        </h2>
    </div>

    
    
</aside>                        </section>
                        
    


                    </article>
                </div>
            </div>

            <div class="container box-shadow">
                




<footer>
    <p class="copyright">Sainsbury's Bank plc, Registered Office, 33 Holborn, London EC1N 2HT (registered in England and Wales, no. 3279730) is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority (Register no. 184514). Sainsbury's Supermarkets Ltd is an appointed representative of Sainsbury's Bank plc.<br/>**Telephone calls may be recorded for security purposes and monitored under our quality control procedures. Calls are free from a landline and from a mobile when calling from the UK.</p> 
</footer>


            </div>
        </div>






<div class="mobile-sidebar">
    <div class="scroll-area">
        <ul class="mobile-side-menu" data-behaviour="mobileSideMenu">
            
                        <li><a id="lnkMyAccounts" class="active" href="/servicing/servicing/my-accounts"><i class="icon-fixed-width icon-dashboard icon-2x"></i>My accounts</a></li>
                        <li><a id="lnkTwoWayMessaging" class="" href="/servicing/servicing/twowaymessaging"><i class="icon-fixed-width icon-envelope icon-2x"></i>Messages</a></li>
                        <li><a id="lnkMyDetails" class="" href="/servicing/servicing/my-details"><i class="icon-fixed-width icon-user icon-2x"></i>My details</a></li>
                        <li><a id="lnkApply" class="" href="/servicing/servicing/product/savings"><i class="icon-fixed-width icon-hand-right icon-2x"></i>Apply</a></li>
                        <li><a id="lnkHelp" onclick="ClearActiveMenu()" href="http://www.sainsburysbank.co.uk/insuring/support/customer_support_zone" target="_blank"><i class="icon-fixed-width icon-question-sign icon-2x"></i>Need help? <span class="visuallyhidden">opens a new window</span><i aria-hidden="true" class="icon-external-link"></i></a></li>
                <li><a class="" href="/servicing/servicing/signout"><i class="icon-fixed-width icon-signout icon-2x"></i>Log out</a></li>
        </ul>
    </div>
</div>

<script>
    function ClearActiveMenu() {
        var $ulParent = $('#lnkHelp').parent().parent('ul');
        $ulParent.find('a.active').removeClass('active');
    }

    function SelfCertifyOpen() {
        var popupId = '#self-certify', $popup = $(popupId);
        if ($popup.is(':hidden')) {
            wrapPopup(true);
            $.magnificPopup.open({
                items: {
                    src: popupId,
                },
                type: 'inline',
                callbacks: {
                    close: function () {
                        wrapPopup(false);
                    }
                },
                closeOnBgClick: false
            }, 0);
            $popup.removeClass('hide').find('.collapsible').show();
            return false;
        } else {
            return false;
        }
    }

    var wrapPopup = function (wrapit) {
        var $wrapinform = $('#saveapp');
        if (wrapit) {
            if (!$wrapinform.parent().is('form')) {
                $wrapinform.wrap('<form></form>');
            }
        } else {
            if ($wrapinform.parent().is('form')) {
                $wrapinform.unwrap();
            }
        }
    };
</script>

            
        
        
        
        <script src="/servicing/Scripts/plugins.js"></script>
        <script src="/servicing/Scripts/lib/ie.validation.js"></script>
        <script src="/servicing/Scripts/Servicing/validation.js"></script>
        <script src="/servicing/Scripts/Servicing/product-eligibility.js"></script>
        <script src="/servicing/Scripts/Servicing/events.js"></script>
        <script src="/servicing/Scripts/config.js"></script>         
        <script>applyConfig.baseUrl = "/servicing/";</script>
        <script src="/servicing/Scripts/Servicing/routes.js"></script>
        <script src="/servicing/Scripts/Servicing/uifunctions.js"></script>
        <script src="/servicing/Scripts/Servicing/servicing.js"></script>
        <script src="/servicing/Scripts/vendor/jquery.iframeResizer.min.js"></script>
        <script>

            var iframeLoadCheckTimer = window.setInterval(function () {
                var $parents = $(".iframe-parent");
                $parents.each(function () {
                    if ($(this).height() != $(this).find('iframe[data-resize="auto"]').height()) {
                        $(this).height($(this).find('iframe[data-resize="auto"]').height());
                    }
                });

            }, 32);

            $(window).resize(function () {
                var $parents = $(".iframe-parent");
                $parents.each(function () {
                    $(this).height($(this).find('iframe[data-resize="auto"]').height());
                });
                window.clearInterval(iframeLoadCheckTimer);
            });

            $('iframe[data-resize="auto"]').iFrameSizer({
                log: false,
                contentWindowBodyMargin: 0,
                doHeight: true,
                doWidth: false,
                interval: 32,
                enablePublicMethods: true
            });
        </script>
        <script type="text/javascript">
    function copyOptOutEmail() {
        //document.getElementById("OptOutLink").href = 'https://sainsburys.pajmc.com/cgi-bin/msite?unsubscribe+a+0+0+0+0+0&email=' + $("#EmailAddress").val();
        var myForm = document.createElement("form");

        myForm.action = "https://sainsburys.pajmc.com/cgi-bin/msite?unsubscribe+a+0+0+0+0+0&email=" + $("#EmailAddress").val();// the href of the link
        myForm.target = "_blank";
        myForm.method = "POST";
        myForm.name = "dynamicform";
        //document.myForm.submit();
        document.body.appendChild(myForm);
        myForm.submit();
        return false; // cancel the actual link

    }

        </script>
        
    <script type="text/javascript">
        $(function () {
            $("a.disabled").click(function () {
                return false;
            });
        });
    </script>

    </body>
</html>`


parseSainsburysPage();
