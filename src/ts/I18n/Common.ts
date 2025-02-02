/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "I18n.Common": {
            /** @constant */
            readonly url_lang_prefix: "";
            /** @constant */
            readonly Page_404_text: "Page Not Found";
            /** @constant */
            readonly Page_404_text2: "You will be redirected <br> in";
            /** @constant */
            readonly Page_404_sec: "seconds";
            /** @constant */
            readonly Page_403_text: "Access denied";
            /** @constant */
            readonly openApp_text: "Page loading";
            /** @constant */
            readonly openApp_text2: "Open application";
            /** @constant */
            readonly lang: "en";
            /** @constant */
            readonly lang_country: "US";
            /** @constant */
            readonly lang_url: "";
            /** @constant */
            readonly alternate_lang: "ru";
            /** @constant */
            readonly alternate_lang_country: "RU";
            /** @constant */
            readonly alternate_lang_url: "/ru";
            /** @constant */
            readonly Lang_full: "English";
            /** @constant */
            readonly language: "language";
            /** @constant */
            readonly Language: "Language";
            /** @constant */
            readonly locale: "en_US";
            /** @constant */
            readonly date_format: "m/d/Y";
            /** @constant */
            readonly Description: "Tools for tracking, analyzing and measuring SEO performance";
            /** @constant */
            readonly Og_description: "Try out SEO & PPC Tools for keyword research, clustering, rank tracking and on-page optimization. Get better results from paid search and organic rankings!";
            /** @constant */
            readonly Og_description_invite: "SEO & PPC Tools for better marketing. Highly recommended!";
            /** @constant */
            readonly Ascending: "Ascending";
            /** @constant */
            readonly Descending: "Descending";
            /** @constant */
            readonly TV_address_street: "Voronezhskaya ul.";
            /** @constant */
            readonly Message_session_security_error: "Session security error, please <a href=\"/\">refresh page</a> and try again";
            /** @constant */
            readonly Message_dbh_remote: "We're upgrading our servers. The service is temporarily unavailable. Please, try again later";
            /** @constant */
            readonly Message_dbh_remote_error: "We're upgrading our servers. Tasks creating is temporarily unavailable. Please, try again later";
            /** @constant */
            readonly Message_ch_error: "We're upgrading this module's server, please, try again later";
            /** @constant */
            readonly Message_sp_error: "We're upgrading this module's server, please, try again later";
            /** @constant */
            readonly Every_day: "Every day";
            /** @constant */
            readonly time_a_0: "times";
            /** @constant */
            readonly time_a_1: "time";
            /** @constant */
            readonly time_a_2: "times";
            /** @constant */
            readonly a_week: "a week";
            /** @constant */
            readonly a_month: "a month";
            /** @constant */
            readonly discount: "discount";
            /** @constant */
            readonly month_short: "mo";
            /** @constant */
            readonly Balance: "Balance";
            /** @constant */
            readonly Referrals: "Affiliate program";
            /** @constant */
            readonly Organization: "Organization";
            /** @constant */
            readonly Yes: "Yes";
            /** @constant */
            readonly Exists: "Exists";
            /** @constant */
            readonly No: "No";
            /** @constant */
            readonly not: "not";
            /** @constant */
            readonly and: "and";
            /** @constant */
            readonly ruble: "rub.";
            /** @constant */
            readonly for: "for";
            /** @constant */
            readonly For: "For";
            /** @constant */
            readonly Close: "Close";
            /** @constant */
            readonly OK: "OK";
            /** @constant */
            readonly Apply: "OK";
            /** @constant */
            readonly Choose: "Apply";
            /** @constant */
            readonly Download: "Download";
            /** @constant */
            readonly download: "download";
            /** @constant */
            readonly Step: "Step";
            /** @constant */
            readonly Continue: "Continue";
            /** @constant */
            readonly Back: "Back";
            /** @constant */
            readonly Next: "Next";
            /** @constant */
            readonly Prev_page_short: "Prev";
            /** @constant */
            readonly Next_page_short: "Next";
            /** @constant */
            readonly project: "project";
            /** @constant */
            readonly Project: "Project";
            /** @constant */
            readonly of_project: "of project";
            /** @constant */
            readonly Tool_digest: "Tool digest (2024)";
            /** @constant */
            readonly Ticket: "Ticket";
            /** @constant */
            readonly Tickets: "Tickets";
            /** @constant */
            readonly All_tickets: "All tickets";
            /** @constant */
            readonly All_pages: "All articles";
            /** @constant */
            readonly Submit: "Submit";
            /** @constant */
            readonly Tickets_page: "\"Tickets\" page";
            /** @constant */
            readonly Submitted: "Submitted";
            /** @constant */
            readonly Created_at: "Created";
            /** @constant */
            readonly Schet_number: "No.";
            /** @constant */
            readonly Cancel: "Cancel";
            /** @constant */
            readonly Send: "Send";
            /** @constant */
            readonly More: "More";
            /** @constant */
            readonly Read_more: "Read more";
            /** @constant */
            readonly User: "User";
            /** @constant */
            readonly Message: "Message";
            /** @constant */
            readonly Message_not_sended: "Message hasn't been sent";
            /** @constant */
            readonly Comment_not_deleted: "Comment not removed";
            /** @constant */
            readonly Link: "Link";
            /** @constant */
            readonly Name: "Name";
            /** @constant */
            readonly First_and_last_name: "First and last name";
            /** @constant */
            readonly Access_denied: "Access denied";
            /** @constant */
            readonly Access_error: "Access error";
            /** @constant */
            readonly No_data: "No data found";
            /** @constant */
            readonly No_results: "No results";
            /** @constant */
            readonly Dynamics: "Dynamics";
            /** @constant */
            readonly Country: "Country";
            /** @constant */
            readonly Number: "No.";
            /** @constant */
            readonly Number_word: "Number";
            /** @constant */
            readonly CPC: "CPC";
            /** @constant */
            readonly Clear: "Clear";
            /** @constant */
            readonly Phone: "Phone number";
            /** @constant */
            readonly Email: "Email";
            /** @constant */
            readonly Email_not_exist: "The Email you entered doesn't exist";
            /** @constant */
            readonly Password_incorrect: "The password you entered is incorrect!";
            /** @constant */
            readonly Enter_email: "Enter email";
            /** @constant */
            readonly Enter_password: "Enter password";
            /** @constant */
            readonly Remember_me: "Remember me";
            /** @constant */
            readonly Forgot_password: "Forgot your password?";
            /** @constant */
            readonly Signup_now: "Sign up now";
            /** @constant */
            readonly Sign_in_with: "Sign in with";
            /** @constant */
            readonly Password_recovering: "Recover password";
            /** @constant */
            readonly Recover_password: "Recover password";
            /** @constant */
            readonly Keywords_one_per_line: "Keywords (each keyword on a new line)";
            /** @constant */
            readonly Add_se: "Add a Search engine";
            /** @constant */
            readonly Create_project: "Create a project";
            /** @constant */
            readonly Creating: "Creating...";
            /** @constant */
            readonly Enter_valid_email_notice: "Enter a valid E-mail address";
            /** @constant */
            readonly No_account_sign_up: "No account? <a href=\".\" data-to-view=\"%toViewReg%\">Sign up</a>";
            /** @constant */
            readonly No_account: "No account?";
            /** @constant */
            readonly Through_registration_you_confirm_agreement_policy: "By pressing Sign up you accept <a href=\"%hrefConfirm%\" target=\"_blank\">Terms and Conditions</a> and <a href=\"%hrefPrivacy%\" target=\"_blank\">Privacy Policy</a>";
            /** @constant */
            readonly Already_have_account: "Already have an account";
            /** @constant */
            readonly Try_again_or_sign_up: "<a href=\".\" data-to-view=\"%toViewAuth%\">Log in</a> or <a href=\".\" data-to-view=\"%toViewReg%\">sign up</a>";
            /** @constant */
            readonly If_no_msg_check_spam_ask_support_notice: "If you didn't receive a message, check a <b>Spam</b> folder or submit a ticket to <a href=\"%hrefCreateTicket%\">Customer support</a>";
            /** @constant */
            readonly If_no_msg: "If you didn't receive a message, check a <b>Spam</b> folder or submit a ticket to ";
            /** @constant */
            readonly support_notice: "Customer support";
            /** @constant */
            readonly Confirmation_link_sent_to_email: "A confirmation link has been sent to ";
            /** @constant */
            readonly Internal_error: "Internal error occurred, please submit a report to the developers";
            /** @constant */
            readonly Unknown_error: "Unknown error occurred, please try again later";
            /** @constant */
            readonly Google_server_error: "Google server error";
            /** @constant */
            readonly Yandex_API_server_error: "Yandex.API server error";
            /** @constant */
            readonly Yandex_auth_error: "Error occurred! Please, contact the project owner to resolve the issue!";
            /** @constant */
            readonly Request_error_required: "Required parameter missing in the request";
            /** @constant */
            readonly Request_error_type: "Passed parameter type mismatch";
            /** @constant */
            readonly Request_error_value: "Passed parameter value mismatch";
            /** @constant */
            readonly Request_error_qualifiers: "Passed qualifiers mismatch";
            /** @constant */
            readonly Error_regexp: "Regular expression error";
            /** @constant */
            readonly Valid_characters: "Valid characters";
            /** @constant */
            readonly Bonus: "Bonus";
            /** @constant */
            readonly or: "or";
            /** @constant */
            readonly to: "until";
            /** @constant */
            readonly to_1: "to";
            /** @constant */
            readonly at: "at";
            /** @constant */
            readonly To: "Until";
            /** @constant */
            readonly Until: "Up to ";
            /** @constant */
            readonly next_count: "next";
            /** @constant */
            readonly pages: "pages";
            /** @constant */
            readonly pages_full: "pages";
            /** @constant */
            readonly limit: "display";
            /** @constant */
            readonly by: "by";
            /** @constant */
            readonly Path: "Path";
            /** @constant */
            readonly Rule: "Rule";
            /** @constant */
            readonly Allow: "Allow";
            /** @constant */
            readonly Disallow: "Forbid";
            /** @constant */
            readonly Allow_of_mask: "Add mask matches from sitemap";
            /** @constant */
            readonly Disallow_of_mask: "Forbid the mask";
            /** @constant */
            readonly Search: "Search";
            /** @constant */
            readonly Examples: "Examples";
            /** @constant */
            readonly Begin: "Start";
            /** @constant */
            readonly Start_over: "Start over";
            /** @constant */
            readonly Export: "Export";
            /** @constant */
            readonly Import: "Import";
            /** @constant */
            readonly Off: "Off";
            /** @constant */
            readonly Changes: "Changes";
            /** @constant */
            readonly Change: "Change";
            /** @constant */
            readonly Value: "Value";
            /** @constant */
            readonly Hide: "Hide";
            /** @constant */
            readonly Display: "Display";
            /** @constant */
            readonly Save: "Save";
            /** @constant */
            readonly Time: "Time";
            /** @constant */
            readonly Loading: "Loading";
            /** @constant */
            readonly CY: "CY";
            /** @constant */
            readonly Broker: "Bid manager";
            /** @constant */
            readonly Maintenance: "Page is under maintenance";
            /** @constant */
            readonly on_account: "to account";
            /** @constant */
            readonly on: "to";
            /** @constant */
            readonly Tools: "SEO Tools";
            /** @constant */
            readonly Keyword_researcher: "Keyword research tool";
            /** @constant */
            readonly Rank_tracker: "Rank tracker tool";
            /** @constant */
            readonly Upload: "Upload";
            /** @constant */
            readonly Hide_all: "Hide all";
            /** @constant */
            readonly Expand_all: "Expand all";
            /** @constant */
            readonly Expand: "Expand";
            /** @constant */
            readonly Attention: "Attention";
            /** @constant */
            readonly from: "from";
            /** @constant */
            readonly from_1: "from";
            /** @constant */
            readonly dated: "dated";
            /** @constant */
            readonly fromDate: "from";
            /** @constant */
            readonly toDate: "to";
            /** @constant */
            readonly SE: "SE";
            /** @constant */
            readonly Guest_link: "Guest link";
            /** @constant */
            readonly Guest_link_copied_to_clipboard: "Guest link copied to clipboard";
            /** @constant */
            readonly Device_0: "PC";
            /** @constant */
            readonly Device_1: "Tablet";
            /** @constant */
            readonly Device_2: "Phone";
            /** @constant */
            readonly Device_100: "YandexBot/3.0";
            /** @constant */
            readonly Device_102: "YandexBot/3.0 (mobile)";
            /** @constant */
            readonly Device_110: "Googlebot/2.1";
            /** @constant */
            readonly Device_112: "Googlebot/2.1 (mobile)";
            /** @constant */
            readonly Device_120: "AdsBot-Google";
            /** @constant */
            readonly Device_122: "AdsBot-Google-Mobile";
            /** @constant */
            readonly Tag: "Tag";
            /** @constant */
            readonly Tags: "Tags";
            /** @constant */
            readonly All_tags: "All tags";
            /** @constant */
            readonly Charts: "Charts";
            /** @constant */
            readonly All: "All";
            /** @constant */
            readonly Selected: "Selected";
            /** @constant */
            readonly Select: "Select";
            /** @constant */
            readonly Select_all: "Select all";
            /** @constant */
            readonly Added: "Added";
            /** @constant */
            readonly Deleted: "Deleted";
            /** @constant */
            readonly Rename: "Rename";
            /** @constant */
            readonly On_or_off: "On / Off";
            /** @constant */
            readonly Autoselect: "Autoselect";
            /** @constant */
            readonly Open_project: "Open project";
            /** @constant */
            readonly Domain: "Domain";
            /** @constant */
            readonly Domains: "Domains";
            /** @constant */
            readonly Track: "Track";
            /** @constant */
            readonly Check: "Check";
            /** @constant */
            readonly Track_continued: "Track";
            /** @constant */
            readonly Telegram: "Telegram";
            /** @constant */
            readonly Link_to_telegram: "Link to Telegram";
            /** @constant */
            readonly Other: "Other";
            /** @constant */
            readonly Other_f: "Other";
            /** @constant */
            readonly Proceed: "Proceed";
            /** @constant */
            readonly Projects: "Projects";
            /** @constant */
            readonly Metrika: "Yandex.Metrica";
            /** @constant */
            readonly Webmaster: "Yandex.Webmaster";
            /** @constant */
            readonly Yandex_Direct: "Yandex Direct";
            /** @constant */
            readonly YandexDirect: "Yandex.Direct";
            /** @constant */
            readonly Yandex_Wordstat: "Yandex Wordstat";
            /** @constant */
            readonly Y_freq: "Volume";
            /** @constant */
            readonly Y_freq2: "\"Volume\"";
            /** @constant */
            readonly Y_freq3: "\"!Volume\"";
            /** @constant */
            readonly Y_freq5: "\"[Volume]\"";
            /** @constant */
            readonly Y_freq6: "\"[!Volume]\"";
            /** @constant */
            readonly G_freq2: "\"[Volume]\"";
            /** @constant */
            readonly M_freq2: "\"Volume\"";
            /** @constant */
            readonly Y_price1: "1st Premium";
            /** @constant */
            readonly Y_price2: "2st Premium";
            /** @constant */
            readonly Y_price3: "Premium";
            /** @constant */
            readonly Y_price4: "1st place";
            /** @constant */
            readonly Y_price5: "Guaranteed";
            /** @constant */
            readonly G_price: "Bid";
            /** @constant */
            readonly Search_engine: "Search engine";
            /** @constant */
            readonly Search_engines: "Search engines";
            /** @constant */
            readonly Region: "Location";
            /** @constant */
            readonly region: "location";
            /** @constant */
            readonly Selected_regions: "Selected locations";
            /** @constant */
            readonly Compare: "Compare";
            /** @constant */
            readonly Folder: "Folder";
            /** @constant */
            readonly Group: "Group";
            /** @constant */
            readonly Visibility: "Visibility";
            /** @constant */
            readonly Average: "Avg.pos.";
            /** @constant */
            readonly Average_position: "Average position";
            /** @constant */
            readonly Add: "Add";
            /** @constant */
            readonly Create: "Create";
            /** @constant */
            readonly Move: "Move";
            /** @constant */
            readonly Delete: "Delete";
            /** @constant */
            readonly Replace: "Repalce";
            /** @constant */
            readonly Restore: "Restore";
            /** @constant */
            readonly Copy: "Copy";
            /** @constant */
            readonly Copy2: "Copy";
            /** @constant */
            readonly Remove: "Delete";
            /** @constant */
            readonly Charge: "You will be charged";
            /** @constant */
            readonly confirm: "confirm";
            /** @constant */
            readonly Confirm: "Confirm";
            /** @constant */
            readonly Delete_selected: "Delete selected";
            /** @constant */
            readonly Delete_all: "Delete all";
            /** @constant */
            readonly Traffic: "Traffic";
            /** @constant */
            readonly Positions: "Rankings";
            /** @constant */
            readonly Keyword: "Keyword";
            /** @constant */
            readonly Key_word: "Keyword";
            /** @constant */
            readonly Settings: "Settings";
            /** @constant */
            readonly Settings_URL: "URL Settings";
            /** @constant */
            readonly Irreversible: "Important! This operation cannot be undone.";
            /** @constant */
            readonly Empty_field: "Missing";
            /** @constant */
            readonly Notification: "Notifications";
            /** @constant */
            readonly Personal_project: "My project";
            /** @constant */
            readonly Agreement: "Terms of Service";
            /** @constant */
            readonly Period: "Period";
            /** @constant */
            readonly Config_is_readonly: "You cannot change project settings until tracking is completed";
            /** @constant */
            readonly regions: "locations";
            /** @constant */
            readonly types: "types";
            /** @constant */
            readonly Select_date: "Select date";
            /** @constant */
            readonly Not_date: "Not date";
            /** @constant */
            readonly Close_window: "Close window";
            /** @constant */
            readonly Dashboard: "Dashboard";
            /** @constant */
            readonly Support: "Help center";
            /** @constant */
            readonly Shortener: "URL shortener";
            /** @constant */
            readonly Journal: "Journal";
            /** @constant */
            readonly Academy: "Academy";
            /** @constant */
            readonly Pricing: "Pricing";
            /** @constant */
            readonly Signup: "Sign up";
            /** @constant */
            readonly Sign_up: "Sign up";
            /** @constant */
            readonly Sign_up_2: "Sign up";
            /** @constant */
            readonly Sign_in: "Sign in";
            /** @constant */
            readonly Sign_in_account: "Sign in";
            /** @constant */
            readonly Sign_out: "Sign out";
            /** @constant */
            readonly Server_response: "Server response";
            /** @constant */
            readonly Red: "Red";
            /** @constant */
            readonly Orange: "Orange";
            /** @constant */
            readonly Yellow: "Yellow";
            /** @constant */
            readonly Blue: "Blue";
            /** @constant */
            readonly Purple: "Purple";
            /** @constant */
            readonly Green: "Green";
            /** @constant */
            readonly Magenta: "Magenta";
            /** @constant */
            readonly Dark_blue: "Dark blue";
            /** @constant */
            readonly Turquoise: "Turquoise";
            /** @constant */
            readonly Frequency: "Volume";
            /** @constant */
            readonly Moscow: "Moscow";
            /** @constant */
            readonly Minsk: "Minsk";
            /** @constant */
            readonly Kyiv: "Kyiv";
            /** @constant */
            readonly London: "London";
            /** @constant */
            readonly NewYork: "New York";
            /** @constant */
            readonly StPetersburg: "St. Petersburg";
            /** @constant */
            readonly Almaty: "Almaty";
            /** @constant */
            readonly Russia: "Russia";
            /** @constant */
            readonly Ukraine: "Ukraine";
            /** @constant */
            readonly Kazakhstan: "Kazakhstan";
            /** @constant */
            readonly Belarus: "Belarus";
            /** @constant */
            readonly Sum: "Amount";
            /** @constant */
            readonly Date: "Date";
            /** @constant */
            readonly Week: "Week";
            /** @constant */
            readonly Month: "Month";
            /** @constant */
            readonly month: "month";
            /** @constant */
            readonly months: "months";
            /** @constant */
            readonly months_mult: "months";
            /** @constant */
            readonly months_6: "6 months";
            /** @constant */
            readonly Quarter: "Quarter";
            /** @constant */
            readonly Year: "Year";
            /** @constant */
            readonly Total: "Total";
            /** @constant */
            readonly TOTAL: "TOTAL";
            /** @constant */
            readonly Yandex_update: "Yandex update";
            /** @constant */
            readonly "\u0441ode": "code";
            /** @constant */
            readonly Thank_you: "Thank you!";
            /** @constant */
            readonly Thank_you_for_using_our_tools: "Thank you for using our tools";
            /** @constant */
            readonly Since: "Since";
            /** @constant */
            readonly Till: "Till";
            /** @constant */
            readonly till: "up to";
            /** @constant */
            readonly Yandex: "Yandex";
            /** @constant */
            readonly Position: "Rank";
            /** @constant */
            readonly Impressions: "Impressions";
            /** @constant */
            readonly Demand: "Demand";
            /** @constant */
            readonly FAQ: "FAQ";
            /** @constant */
            readonly Frequently_asked_questions: "Frequently asked questions";
            /** @constant */
            readonly Owner: "Owner";
            /** @constant */
            readonly level: "level";
            /** @constant */
            readonly No_payments: "No payments yet";
            /** @constant */
            readonly Show_legend: "Show legend";
            /** @constant */
            readonly Hide_legend: "Hide legend";
            /** @constant */
            readonly Menu_expand: "Expand menu";
            /** @constant */
            readonly Menu_unexpand: "Minimize menu";
            /** @constant */
            readonly Menu_dynamics_search: "Search";
            /** @constant */
            readonly Menu_dynamics: "Rank Tracker";
            /** @constant */
            readonly Menu_snapshots: "SERP Snapshots";
            /** @constant */
            readonly Menu_competitors: "My competitors";
            /** @constant */
            readonly Menu_phrases: "Keywords";
            /** @constant */
            readonly Menu_audit: "Audit";
            /** @constant */
            readonly Menu_analytics: "Overview";
            /** @constant */
            readonly Menu_PPC: "PPC";
            /** @constant */
            readonly Menu_broker: "Yandex.Direct";
            /** @constant */
            readonly Menu_settings: "Settings";
            /** @constant */
            readonly Menu_more: "More";
            /** @constant */
            readonly Folders: "Folders";
            /** @constant */
            readonly Groups: "Groups";
            /** @constant */
            readonly Keywords: "Keywords";
            /** @constant */
            readonly of_keywords: "keywords";
            /** @constant */
            readonly of_folders: "folders";
            /** @constant */
            readonly of_projects: "projects";
            /** @constant */
            readonly of_project1: "for project";
            /** @constant */
            readonly for_project: "for project";
            /** @constant */
            readonly competitor: "competitor";
            /** @constant */
            readonly All_groups: "All groups";
            /** @constant */
            readonly All_folders: "All folders";
            /** @constant */
            readonly All_regions: "All locations";
            /** @constant */
            readonly All_searchers: "All search engines";
            /** @constant */
            readonly All_projects: "All projects";
            /** @constant */
            readonly Integration: "Integration";
            /** @constant */
            readonly updates_days: "update days";
            /** @constant */
            readonly whole_period: "the entire period";
            /** @constant */
            readonly two_dates: "two dates";
            /** @constant */
            readonly Report_for_project: "Project report for";
            /** @constant */
            readonly Interval: "Time range";
            /** @constant */
            readonly competitors_comparison: "compare with competitors";
            /** @constant */
            readonly Searchers_comparison: "Compare by search engine";
            /** @constant */
            readonly Regions_comparison: "Compare by location";
            /** @constant */
            readonly Browser_not_supported: "Your browser is not supported!";
            /** @constant */
            readonly Browser_settings: "Browser settings";
            /** @constant */
            readonly Service_may_go_unstable: "Service might be unstable";
            /** @constant */
            readonly Preferred_browser: "Compatible browser is";
            /** @constant */
            readonly Comparison_by: "Compare by";
            /** @constant */
            readonly Phrases: "Keywords";
            /** @constant */
            readonly TOP: "TOP";
            /** @constant */
            readonly Top: "Top";
            /** @constant */
            readonly Phrases_dynamics: "Keyword dynamics";
            /** @constant */
            readonly Project_settings: "Project settings";
            /** @constant */
            readonly Phrases_in_TOP: "Keywords in TOP";
            /** @constant */
            readonly Phrases_in_Top: "Keywords in Top";
            /** @constant */
            readonly Page: "Page";
            /** @constant */
            readonly page: "page";
            /** @constant */
            readonly last_10_days: "last 10 days";
            /** @constant */
            readonly last_month: "last month";
            /** @constant */
            readonly last_check: "last update";
            /** @constant */
            readonly last_two_dates: "last 2 updates";
            /** @constant */
            readonly last_month_week_average: "last month (week's average)";
            /** @constant */
            readonly also_searched: "similar keywords";
            /** @constant */
            readonly Sources: "Sources";
            /** @constant */
            readonly Clicks: "Clicks";
            /** @constant */
            readonly Other_dates: "Other dates";
            /** @constant */
            readonly Help_center: "Help";
            /** @constant */
            readonly Help_center_welcome: "Support Center";
            /** @constant */
            readonly Help_center_question: "Got any questions?";
            /** @constant */
            readonly Run: "Run";
            /** @constant */
            readonly Manage: "Manage";
            /** @constant */
            readonly Missed_project_id: "Project id is missing";
            /** @constant */
            readonly Missed_project_id2: "`Project_id` is missing";
            /** @constant */
            readonly Project_analytics: "Project analytics";
            /** @constant */
            readonly Project_dynamics: "Keyword dynamics";
            /** @constant */
            readonly Apometr: "Updates";
            /** @constant */
            readonly Apometr_title: "Google and Yandex SERP tracking tool";
            /** @constant */
            readonly Apometr_description: "Google and Yandex updates calendar (SERP updates and changes). Get SERP updates alerts. SERP updates score for different locations and content types.";
            /** @constant */
            readonly Apometr_og_title: "Google and Yandex SERP updates";
            /** @constant */
            readonly Apometr_og_description: "SERP updates score for different locations and content types.";
            /** @constant */
            readonly Apometr_notice: "Get update alerts";
            /** @constant */
            readonly Pricing_title: "Pricing";
            /** @constant */
            readonly Profile_title: "Account";
            /** @constant */
            readonly Bank_title: "Bank";
            /** @constant */
            readonly Your_projects: "Your projects";
            /** @constant */
            readonly Incorrect_file_format: "Invalid file format (expected: %availableExtensionsNames%)";
            /** @constant */
            readonly Max_size: "Maximum upload size exceeded (%maxSize%)";
            /** @constant */
            readonly Audit: "Website SEO Audit tool";
            /** @constant */
            readonly Tutorial: "Tutorials";
            /** @constant */
            readonly User_id: "User ID";
            /** @constant */
            readonly Managing_executive: "Managing executive";
            /** @constant */
            readonly Pustovoit: "Pustovoit";
            /** @constant */
            readonly Denis: "Denis";
            /** @constant */
            readonly Anatolyevich: "Anatolyevich";
            /** @constant */
            readonly CEO: "Chief Executive Officer";
            /** @constant */
            readonly office: "office";
            /** @constant */
            readonly Dot: "Dot";
            /** @constant */
            readonly Comma: "Comma";
            /** @constant */
            readonly Enter_manually: "Add manually";
            /** @constant */
            readonly max_10_mb: "max 10 Mb";
            /** @constant */
            readonly Schedule_settings_checks: "Checks schedule";
            /** @constant */
            readonly Schedule_settings_reports: "Reports schedule";
            /** @constant */
            readonly Basic: "Basic";
            /** @constant */
            readonly Address_IP: "IP address";
            /** @constant */
            readonly Phone_number: "Phone number";
            /** @constant */
            readonly Recipient: "Recipient";
            /** @constant */
            readonly Federal_act: " Federal act";
            /** @constant */
            readonly optional: "optional";
            /** @constant */
            readonly Full_name_abbr: "Full name";
            /** @constant */
            readonly Mobile_phone: "Mobile phone";
            /** @constant */
            readonly not_found: "not found";
            /** @constant */
            readonly Try_to_reset_filters_or_search_archive_html: "Try to <i class=\"a\" data-action=\"reset_filters\">reset</i> all filters<br><i class=\"archive_search\">\n\tor search <a href=\"/support/projects/archive\" target=\"_blank\" class=\"a\">Archived</a> projects</i>";
            /** @constant */
            readonly Print: "Print";
            /** @constant */
            readonly Contact_us: "Contact us";
            /** @constant */
            readonly Competitor_analysis: "Competitor research";
            /** @constant */
            readonly Refill_balance: "Top up your balance";
            /** @constant */
            readonly Median: "Median";
            /** @constant */
            readonly Reset: "Reset";
            /** @constant */
            readonly View: "View";
            /** @constant */
            readonly Bar_pin: "Pin bar";
            /** @constant */
            readonly Count: "Number";
            /** @constant */
            readonly Invalid_url: "Invalid URL format";
            /** @constant */
            readonly Access_settings: "Access settings";
            /** @constant */
            readonly Hide_access_settings: "Hide access settings";
            /** @constant */
            readonly Sort: "Sort";
            /** @constant */
            readonly No_snippet: "No snippet";
            /** @constant */
            readonly Copied_to_clipboard: "Copied to clipboard";
            /** @constant */
            readonly Cannot_copied_to_clipboard: "Cannot copied to clipboard";
            /** @constant */
            readonly Copy_guest_link_manually: "Copy the guest link manually";
            /** @constant */
            readonly Press_to_copy_1: "Press";
            /** @constant */
            readonly Press_to_copy_2: "+C to copy a link";
            /** @constant */
            readonly Guest_link_created: "Guest link created";
            /** @constant */
            readonly Need_fill_required_fields: "Please fill in all required fields";
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
