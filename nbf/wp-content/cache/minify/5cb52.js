function initialise_scrollspy(){scrollspy()}function scrollspy(){jQuery(".post-divider").on("scrollSpy:enter",alnp_enter),jQuery(".post-divider").on("scrollSpy:exit",alnp_leave),jQuery(".post-divider").scrollSpy()}function alnp_enter(){var a=jQuery(this);jQuery("body").trigger("alnp-enter",[a]),changeURL(a)}function alnp_leave(){var a=jQuery(this);jQuery("body").trigger("alnp-leave",[a]),changeURL(a)}function changeURL(a){var b=jQuery(a),c=b.attr("data-url"),d=b.attr("data-title"),e=b.attr("data-post-id"),f=b.offset(),g=jQuery(document).scrollTop();f.top-g<200&&curr_url!=c&&(curr_url=c,History.pushState(null,d,c),jQuery("body").trigger("alnp-post-changed",[d,c,e,post_count,stop_reading])),auto_load_next_post()}function auto_load_next_post(){if(!stop_reading){var a=jQuery(nav_container).find('a[rel="prev"]').attr("href");if(jQuery("body").trigger("alnp-post-url",[post_count,a]),a){if(a.indexOf("?p=")>-1)np_url=a+"&partial=1";else{var b="partial/";"/"!=a.charAt(a.length-1)&&(b="/"+b),np_url=a+b}jQuery(nav_container).remove(),jQuery.get(np_url,function(b){var c=jQuery("<div>"+b+"</div>");jQuery("body").trigger("alnp-post-data",[c]),b=c.html();var d='<hr style="height: 0" class="post-divider" data-url="'+a+'"/>',e=jQuery(d+b),f=e.find(post_title_selector),g=jQuery(c).find("article").attr("id");"undefined"!==typeof g&&""!==g&&(g=g.replace("post-","")),jQuery(content_container).append(e),"yes"===remove_comments&&jQuery(comments_container).remove(),jQuery('hr[data-url="'+a+'"]').attr("data-title",f.text()).attr("data-post-id",g).css("display","inline-block"),scrollspy(),post_count+=1,jQuery("body").trigger("alnp-post-loaded",[f.text(),a,g,post_count])})}}}var content_container=auto_load_next_post_params.alnp_content_container,post_title_selector=auto_load_next_post_params.alnp_title_selector,nav_container=auto_load_next_post_params.alnp_navigation_container,comments_container=auto_load_next_post_params.alnp_comments_container,remove_comments=auto_load_next_post_params.alnp_remove_comments,track_pageviews=auto_load_next_post_params.alnp_google_analytics,curr_url=window.location.href,post_count=0,stop_reading=!1;jQuery.noConflict(),jQuery(document).ready(function(){window.location.href.indexOf("#comments")>-1||("yes"===remove_comments&&jQuery(comments_container).remove(),jQuery(content_container).prepend('<hr style="height: 0" class="post-divider" data-title="'+window.document.title+'" data-url="'+window.location.href+'"/>'),initialise_scrollspy(),jQuery("body").on("alnp-post-changed",function(a,b,c){"yes"==track_pageviews&&("undefined"!==typeof pageTracker||"undefined"!==typeof _gaq||"undefined"!==typeof ga||"undefined"!==typeof __gaTracker)&&("undefined"!==typeof pageTracker&&null!==pageTracker&&pageTracker._trackPageview(c),"undefined"!==typeof _gaq&&null!==_gaq&&_gaq.push(["_trackPageview",c]),"undefined"!==typeof ga&&null!==ga&&ga("send","pageview",c),"undefined"!==typeof __gaTracker&&null!==__gaTracker&&__gaTracker("send","pageview",c))}))});
