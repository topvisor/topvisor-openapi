/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "I18n.Common": {
            readonly url_lang_prefix: string;
            /** @default Page Not Found */
            readonly Page_404_text: string;
            /** @default You will be redirected <br> in */
            readonly Page_404_text2: string;
            /** @default seconds */
            readonly Page_404_sec: string;
            /** @default Access denied */
            readonly Page_403_text: string;
            /** @default Page loading */
            readonly openApp_text: string;
            /** @default Open application */
            readonly openApp_text2: string;
            /** @default en */
            readonly lang: string;
            /** @default US */
            readonly lang_country: string;
            readonly lang_url: string;
            /** @default ru */
            readonly alternate_lang: string;
            /** @default RU */
            readonly alternate_lang_country: string;
            /** @default /ru */
            readonly alternate_lang_url: string;
            /** @default English */
            readonly Lang_full: string;
            /** @default language */
            readonly language: string;
            /** @default Language */
            readonly Language: string;
            /** @default en_US */
            readonly locale: string;
            /** @default m/d/Y */
            readonly date_format: string;
            /** @default Tools for tracking, analyzing and measuring SEO performance */
            readonly Description: string;
            /** @default Try out SEO & PPC Tools for keyword research, clustering, rank tracking and on-page optimization. Get better results from paid search and organic rankings! */
            readonly Og_description: string;
            /** @default SEO & PPC Tools for better marketing. Highly recommended! */
            readonly Og_description_invite: string;
            /** @default Ascending */
            readonly Ascending: string;
            /** @default Descending */
            readonly Descending: string;
            /** @default Voronezhskaya ul. */
            readonly TV_address_street: string;
            /** @default Session security error, please <a href="/">refresh page</a> and try again */
            readonly Message_session_security_error: string;
            /** @default We're upgrading our servers. The service is temporarily unavailable. Please, try again later */
            readonly Message_dbh_remote: string;
            /** @default We're upgrading our servers. Tasks creating is temporarily unavailable. Please, try again later */
            readonly Message_dbh_remote_error: string;
            /** @default We're upgrading this module's server, please, try again later */
            readonly Message_ch_error: string;
            /** @default We're upgrading this module's server, please, try again later */
            readonly Message_sp_error: string;
            /** @default Every day */
            readonly Every_day: string;
            /** @default times */
            readonly time_a_0: string;
            /** @default time */
            readonly time_a_1: string;
            /** @default times */
            readonly time_a_2: string;
            /** @default a week */
            readonly a_week: string;
            /** @default a month */
            readonly a_month: string;
            /** @default discount */
            readonly discount: string;
            /** @default mo */
            readonly month_short: string;
            /** @default Balance */
            readonly Balance: string;
            /** @default Affiliate program */
            readonly Referrals: string;
            /** @default Organization */
            readonly Organization: string;
            /** @default Yes */
            readonly Yes: string;
            /** @default Exists */
            readonly Exists: string;
            /** @default No */
            readonly No: string;
            /** @default not */
            readonly not: string;
            /** @default and */
            readonly and: string;
            /** @default rub. */
            readonly ruble: string;
            /** @default for */
            readonly for: string;
            /** @default For */
            readonly For: string;
            /** @default Close */
            readonly Close: string;
            /** @default OK */
            readonly OK: string;
            /** @default OK */
            readonly Apply: string;
            /** @default Apply */
            readonly Choose: string;
            /** @default Download */
            readonly Download: string;
            /** @default download */
            readonly download: string;
            /** @default Step */
            readonly Step: string;
            /** @default Continue */
            readonly Continue: string;
            /** @default Back */
            readonly Back: string;
            /** @default Next */
            readonly Next: string;
            /** @default Prev */
            readonly Prev_page_short: string;
            /** @default Next */
            readonly Next_page_short: string;
            /** @default project */
            readonly project: string;
            /** @default Project */
            readonly Project: string;
            /** @default of project */
            readonly of_project: string;
            /** @default Tool digest (2024) */
            readonly Tool_digest: string;
            /** @default Ticket */
            readonly Ticket: string;
            /** @default Tickets */
            readonly Tickets: string;
            /** @default All tickets */
            readonly All_tickets: string;
            /** @default All articles */
            readonly All_pages: string;
            /** @default Submit */
            readonly Submit: string;
            /** @default "Tickets" page */
            readonly Tickets_page: string;
            /** @default Submitted */
            readonly Submitted: string;
            /** @default Created */
            readonly Created_at: string;
            /** @default No. */
            readonly Schet_number: string;
            /** @default Cancel */
            readonly Cancel: string;
            /** @default Send */
            readonly Send: string;
            /** @default More */
            readonly More: string;
            /** @default Read more */
            readonly Read_more: string;
            /** @default User */
            readonly User: string;
            /** @default Message */
            readonly Message: string;
            /** @default Message hasn't been sent */
            readonly Message_not_sended: string;
            /** @default Comment not removed */
            readonly Comment_not_deleted: string;
            /** @default Link */
            readonly Link: string;
            /** @default Name */
            readonly Name: string;
            /** @default First and last name */
            readonly First_and_last_name: string;
            /** @default Access denied */
            readonly Access_denied: string;
            /** @default Access error */
            readonly Access_error: string;
            /** @default No data found */
            readonly No_data: string;
            /** @default No results */
            readonly No_results: string;
            /** @default Dynamics */
            readonly Dynamics: string;
            /** @default Country */
            readonly Country: string;
            /** @default No. */
            readonly Number: string;
            /** @default Number */
            readonly Number_word: string;
            /** @default CPC */
            readonly CPC: string;
            /** @default Clear */
            readonly Clear: string;
            /** @default Phone number */
            readonly Phone: string;
            /** @default Email */
            readonly Email: string;
            /** @default The Email you entered doesn't exist */
            readonly Email_not_exist: string;
            /** @default The password you entered is incorrect! */
            readonly Password_incorrect: string;
            /** @default Enter email */
            readonly Enter_email: string;
            /** @default Enter password */
            readonly Enter_password: string;
            /** @default Remember me */
            readonly Remember_me: string;
            /** @default Forgot your password? */
            readonly Forgot_password: string;
            /** @default Sign up now */
            readonly Signup_now: string;
            /** @default Sign in with */
            readonly Sign_in_with: string;
            /** @default Recover password */
            readonly Password_recovering: string;
            /** @default Recover password */
            readonly Recover_password: string;
            /** @default Keywords (each keyword on a new line) */
            readonly Keywords_one_per_line: string;
            /** @default Add a Search engine */
            readonly Add_se: string;
            /** @default Create a project */
            readonly Create_project: string;
            /** @default Creating... */
            readonly Creating: string;
            /** @default Enter a valid E-mail address */
            readonly Enter_valid_email_notice: string;
            /** @default No account? <a href="." data-to-view="%toViewReg%">Sign up</a> */
            readonly No_account_sign_up: string;
            /** @default No account? */
            readonly No_account: string;
            /** @default By pressing Sign up you accept <a href="%hrefConfirm%" target="_blank">Terms and Conditions</a> and <a href="%hrefPrivacy%" target="_blank">Privacy Policy</a> */
            readonly Through_registration_you_confirm_agreement_policy: string;
            /** @default Already have an account */
            readonly Already_have_account: string;
            /** @default <a href="." data-to-view="%toViewAuth%">Log in</a> or <a href="." data-to-view="%toViewReg%">sign up</a> */
            readonly Try_again_or_sign_up: string;
            /** @default If you didn't receive a message, check a <b>Spam</b> folder or submit a ticket to <a href="%hrefCreateTicket%">Customer support</a> */
            readonly If_no_msg_check_spam_ask_support_notice: string;
            /** @default If you didn't receive a message, check a <b>Spam</b> folder or submit a ticket to  */
            readonly If_no_msg: string;
            /** @default Customer support */
            readonly support_notice: string;
            /** @default A confirmation link has been sent to  */
            readonly Confirmation_link_sent_to_email: string;
            /** @default Internal error occurred, please submit a report to the developers */
            readonly Internal_error: string;
            /** @default Unknown error occurred, please try again later */
            readonly Unknown_error: string;
            /** @default Google server error */
            readonly Google_server_error: string;
            /** @default Yandex.API server error */
            readonly Yandex_API_server_error: string;
            /** @default Error occurred! Please, contact the project owner to resolve the issue! */
            readonly Yandex_auth_error: string;
            /** @default Required parameter missing in the request */
            readonly Request_error_required: string;
            /** @default Passed parameter type mismatch */
            readonly Request_error_type: string;
            /** @default Passed parameter value mismatch */
            readonly Request_error_value: string;
            /** @default Passed qualifiers mismatch */
            readonly Request_error_qualifiers: string;
            /** @default Regular expression error */
            readonly Error_regexp: string;
            /** @default Valid characters */
            readonly Valid_characters: string;
            /** @default Bonus */
            readonly Bonus: string;
            /** @default or */
            readonly or: string;
            /** @default until */
            readonly to: string;
            /** @default to */
            readonly to_1: string;
            /** @default at */
            readonly at: string;
            /** @default Until */
            readonly To: string;
            /** @default Up to  */
            readonly Until: string;
            /** @default next */
            readonly next_count: string;
            /** @default pages */
            readonly pages: string;
            /** @default pages */
            readonly pages_full: string;
            /** @default display */
            readonly limit: string;
            /** @default by */
            readonly by: string;
            /** @default Path */
            readonly Path: string;
            /** @default Rule */
            readonly Rule: string;
            /** @default Allow */
            readonly Allow: string;
            /** @default Forbid */
            readonly Disallow: string;
            /** @default Add mask matches from sitemap */
            readonly Allow_of_mask: string;
            /** @default Forbid the mask */
            readonly Disallow_of_mask: string;
            /** @default Search */
            readonly Search: string;
            /** @default Examples */
            readonly Examples: string;
            /** @default Start */
            readonly Begin: string;
            /** @default Start over */
            readonly Start_over: string;
            /** @default Export */
            readonly Export: string;
            /** @default Import */
            readonly Import: string;
            /** @default Off */
            readonly Off: string;
            /** @default Changes */
            readonly Changes: string;
            /** @default Change */
            readonly Change: string;
            /** @default Value */
            readonly Value: string;
            /** @default Hide */
            readonly Hide: string;
            /** @default Display */
            readonly Display: string;
            /** @default Save */
            readonly Save: string;
            /** @default Time */
            readonly Time: string;
            /** @default Loading */
            readonly Loading: string;
            /** @default CY */
            readonly CY: string;
            /** @default Bid manager */
            readonly Broker: string;
            /** @default Page is under maintenance */
            readonly Maintenance: string;
            /** @default to account */
            readonly on_account: string;
            /** @default to */
            readonly on: string;
            /** @default SEO Tools */
            readonly Tools: string;
            /** @default Keyword research tool */
            readonly Keyword_researcher: string;
            /** @default Rank tracker tool */
            readonly Rank_tracker: string;
            /** @default Upload */
            readonly Upload: string;
            /** @default Hide all */
            readonly Hide_all: string;
            /** @default Expand all */
            readonly Expand_all: string;
            /** @default Expand */
            readonly Expand: string;
            /** @default Attention */
            readonly Attention: string;
            /** @default from */
            readonly from: string;
            /** @default from */
            readonly from_1: string;
            /** @default dated */
            readonly dated: string;
            /** @default from */
            readonly fromDate: string;
            /** @default to */
            readonly toDate: string;
            /** @default SE */
            readonly SE: string;
            /** @default Guest link */
            readonly Guest_link: string;
            /** @default Guest link copied to clipboard */
            readonly Guest_link_copied_to_clipboard: string;
            /** @default PC */
            readonly Device_0: string;
            /** @default Tablet */
            readonly Device_1: string;
            /** @default Phone */
            readonly Device_2: string;
            /** @default YandexBot/3.0 */
            readonly Device_100: string;
            /** @default YandexBot/3.0 (mobile) */
            readonly Device_102: string;
            /** @default Googlebot/2.1 */
            readonly Device_110: string;
            /** @default Googlebot/2.1 (mobile) */
            readonly Device_112: string;
            /** @default AdsBot-Google */
            readonly Device_120: string;
            /** @default AdsBot-Google-Mobile */
            readonly Device_122: string;
            /** @default Tag */
            readonly Tag: string;
            /** @default Tags */
            readonly Tags: string;
            /** @default All tags */
            readonly All_tags: string;
            /** @default Charts */
            readonly Charts: string;
            /** @default All */
            readonly All: string;
            /** @default Selected */
            readonly Selected: string;
            /** @default Select */
            readonly Select: string;
            /** @default Select all */
            readonly Select_all: string;
            /** @default Added */
            readonly Added: string;
            /** @default Deleted */
            readonly Deleted: string;
            /** @default Rename */
            readonly Rename: string;
            /** @default On / Off */
            readonly On_or_off: string;
            /** @default Autoselect */
            readonly Autoselect: string;
            /** @default Open project */
            readonly Open_project: string;
            /** @default Domain */
            readonly Domain: string;
            /** @default Domains */
            readonly Domains: string;
            /** @default Track */
            readonly Track: string;
            /** @default Check */
            readonly Check: string;
            /** @default Track */
            readonly Track_continued: string;
            /** @default Telegram */
            readonly Telegram: string;
            /** @default Link to Telegram */
            readonly Link_to_telegram: string;
            /** @default Other */
            readonly Other: string;
            /** @default Other */
            readonly Other_f: string;
            /** @default Proceed */
            readonly Proceed: string;
            /** @default Projects */
            readonly Projects: string;
            /** @default Yandex.Metrica */
            readonly Metrika: string;
            /** @default Yandex.Webmaster */
            readonly Webmaster: string;
            /** @default Yandex Direct */
            readonly Yandex_Direct: string;
            /** @default Yandex.Direct */
            readonly YandexDirect: string;
            /** @default Yandex Wordstat */
            readonly Yandex_Wordstat: string;
            /** @default Volume */
            readonly Y_freq: string;
            /** @default "Volume" */
            readonly Y_freq2: string;
            /** @default "!Volume" */
            readonly Y_freq3: string;
            /** @default "[Volume]" */
            readonly Y_freq5: string;
            /** @default "[!Volume]" */
            readonly Y_freq6: string;
            /** @default "[Volume]" */
            readonly G_freq2: string;
            /** @default "Volume" */
            readonly M_freq2: string;
            /** @default 1st Premium */
            readonly Y_price1: string;
            /** @default 2st Premium */
            readonly Y_price2: string;
            /** @default Premium */
            readonly Y_price3: string;
            /** @default 1st place */
            readonly Y_price4: string;
            /** @default Guaranteed */
            readonly Y_price5: string;
            /** @default Bid */
            readonly G_price: string;
            /** @default Search engine */
            readonly Search_engine: string;
            /** @default Search engines */
            readonly Search_engines: string;
            /** @default Location */
            readonly Region: string;
            /** @default location */
            readonly region: string;
            /** @default Selected locations */
            readonly Selected_regions: string;
            /** @default Compare */
            readonly Compare: string;
            /** @default Folder */
            readonly Folder: string;
            /** @default Group */
            readonly Group: string;
            /** @default Visibility */
            readonly Visibility: string;
            /** @default Avg.pos. */
            readonly Average: string;
            /** @default Average position */
            readonly Average_position: string;
            /** @default Add */
            readonly Add: string;
            /** @default Create */
            readonly Create: string;
            /** @default Move */
            readonly Move: string;
            /** @default Delete */
            readonly Delete: string;
            /** @default Repalce */
            readonly Replace: string;
            /** @default Restore */
            readonly Restore: string;
            /** @default Copy */
            readonly Copy: string;
            /** @default Copy */
            readonly Copy2: string;
            /** @default Delete */
            readonly Remove: string;
            /** @default You will be charged */
            readonly Charge: string;
            /** @default confirm */
            readonly confirm: string;
            /** @default Confirm */
            readonly Confirm: string;
            /** @default Delete selected */
            readonly Delete_selected: string;
            /** @default Delete all */
            readonly Delete_all: string;
            /** @default Traffic */
            readonly Traffic: string;
            /** @default Rankings */
            readonly Positions: string;
            /** @default Keyword */
            readonly Keyword: string;
            /** @default Keyword */
            readonly Key_word: string;
            /** @default Settings */
            readonly Settings: string;
            /** @default URL Settings */
            readonly Settings_URL: string;
            /** @default Important! This operation cannot be undone. */
            readonly Irreversible: string;
            /** @default Missing */
            readonly Empty_field: string;
            /** @default Notifications */
            readonly Notification: string;
            /** @default My project */
            readonly Personal_project: string;
            /** @default Terms of Service */
            readonly Agreement: string;
            /** @default Period */
            readonly Period: string;
            /** @default You cannot change project settings until tracking is completed */
            readonly Config_is_readonly: string;
            /** @default locations */
            readonly regions: string;
            /** @default types */
            readonly types: string;
            /** @default Select date */
            readonly Select_date: string;
            /** @default Not date */
            readonly Not_date: string;
            /** @default Close window */
            readonly Close_window: string;
            /** @default Dashboard */
            readonly Dashboard: string;
            /** @default Help center */
            readonly Support: string;
            /** @default URL shortener */
            readonly Shortener: string;
            /** @default Journal */
            readonly Journal: string;
            /** @default Academy */
            readonly Academy: string;
            /** @default Pricing */
            readonly Pricing: string;
            /** @default Sign up */
            readonly Signup: string;
            /** @default Sign up */
            readonly Sign_up: string;
            /** @default Sign up */
            readonly Sign_up_2: string;
            /** @default Sign in */
            readonly Sign_in: string;
            /** @default Sign in */
            readonly Sign_in_account: string;
            /** @default Sign out */
            readonly Sign_out: string;
            /** @default Server response */
            readonly Server_response: string;
            /** @default Red */
            readonly Red: string;
            /** @default Orange */
            readonly Orange: string;
            /** @default Yellow */
            readonly Yellow: string;
            /** @default Blue */
            readonly Blue: string;
            /** @default Purple */
            readonly Purple: string;
            /** @default Green */
            readonly Green: string;
            /** @default Magenta */
            readonly Magenta: string;
            /** @default Dark blue */
            readonly Dark_blue: string;
            /** @default Turquoise */
            readonly Turquoise: string;
            /** @default Volume */
            readonly Frequency: string;
            /** @default Moscow */
            readonly Moscow: string;
            /** @default Minsk */
            readonly Minsk: string;
            /** @default Kyiv */
            readonly Kyiv: string;
            /** @default London */
            readonly London: string;
            /** @default New York */
            readonly NewYork: string;
            /** @default St. Petersburg */
            readonly StPetersburg: string;
            /** @default Almaty */
            readonly Almaty: string;
            /** @default Russia */
            readonly Russia: string;
            /** @default Ukraine */
            readonly Ukraine: string;
            /** @default Kazakhstan */
            readonly Kazakhstan: string;
            /** @default Belarus */
            readonly Belarus: string;
            /** @default Amount */
            readonly Sum: string;
            /** @default Date */
            readonly Date: string;
            /** @default Week */
            readonly Week: string;
            /** @default Month */
            readonly Month: string;
            /** @default month */
            readonly month: string;
            /** @default months */
            readonly months: string;
            /** @default months */
            readonly months_mult: string;
            /** @default 6 months */
            readonly months_6: string;
            /** @default Quarter */
            readonly Quarter: string;
            /** @default Year */
            readonly Year: string;
            /** @default Total */
            readonly Total: string;
            /** @default TOTAL */
            readonly TOTAL: string;
            /** @default Yandex update */
            readonly Yandex_update: string;
            /** @default code */
            readonly "\u0441ode": string;
            /** @default Thank you! */
            readonly Thank_you: string;
            /** @default Thank you for using our tools */
            readonly Thank_you_for_using_our_tools: string;
            /** @default Since */
            readonly Since: string;
            /** @default Till */
            readonly Till: string;
            /** @default up to */
            readonly till: string;
            /** @default Yandex */
            readonly Yandex: string;
            /** @default Rank */
            readonly Position: string;
            /** @default Impressions */
            readonly Impressions: string;
            /** @default Demand */
            readonly Demand: string;
            /** @default FAQ */
            readonly FAQ: string;
            /** @default Frequently asked questions */
            readonly Frequently_asked_questions: string;
            /** @default Owner */
            readonly Owner: string;
            /** @default level */
            readonly level: string;
            /** @default No payments yet */
            readonly No_payments: string;
            /** @default Show legend */
            readonly Show_legend: string;
            /** @default Hide legend */
            readonly Hide_legend: string;
            /** @default Expand menu */
            readonly Menu_expand: string;
            /** @default Minimize menu */
            readonly Menu_unexpand: string;
            /** @default Search */
            readonly Menu_dynamics_search: string;
            /** @default Rank Tracker */
            readonly Menu_dynamics: string;
            /** @default SERP Snapshots */
            readonly Menu_snapshots: string;
            /** @default My competitors */
            readonly Menu_competitors: string;
            /** @default Keywords */
            readonly Menu_phrases: string;
            /** @default Audit */
            readonly Menu_audit: string;
            /** @default Overview */
            readonly Menu_analytics: string;
            /** @default PPC */
            readonly Menu_PPC: string;
            /** @default Yandex.Direct */
            readonly Menu_broker: string;
            /** @default Settings */
            readonly Menu_settings: string;
            /** @default More */
            readonly Menu_more: string;
            /** @default Folders */
            readonly Folders: string;
            /** @default Groups */
            readonly Groups: string;
            /** @default Keywords */
            readonly Keywords: string;
            /** @default keywords */
            readonly of_keywords: string;
            /** @default folders */
            readonly of_folders: string;
            /** @default projects */
            readonly of_projects: string;
            /** @default for project */
            readonly of_project1: string;
            /** @default for project */
            readonly for_project: string;
            /** @default competitor */
            readonly competitor: string;
            /** @default All groups */
            readonly All_groups: string;
            /** @default All folders */
            readonly All_folders: string;
            /** @default All locations */
            readonly All_regions: string;
            /** @default All search engines */
            readonly All_searchers: string;
            /** @default All projects */
            readonly All_projects: string;
            /** @default Integration */
            readonly Integration: string;
            /** @default update days */
            readonly updates_days: string;
            /** @default the entire period */
            readonly whole_period: string;
            /** @default two dates */
            readonly two_dates: string;
            /** @default Project report for */
            readonly Report_for_project: string;
            /** @default Time range */
            readonly Interval: string;
            /** @default compare with competitors */
            readonly competitors_comparison: string;
            /** @default Compare by search engine */
            readonly Searchers_comparison: string;
            /** @default Compare by location */
            readonly Regions_comparison: string;
            /** @default Your browser is not supported! */
            readonly Browser_not_supported: string;
            /** @default Browser settings */
            readonly Browser_settings: string;
            /** @default Service might be unstable */
            readonly Service_may_go_unstable: string;
            /** @default Compatible browser is */
            readonly Preferred_browser: string;
            /** @default Compare by */
            readonly Comparison_by: string;
            /** @default Keywords */
            readonly Phrases: string;
            /** @default TOP */
            readonly TOP: string;
            /** @default Top */
            readonly Top: string;
            /** @default Keyword dynamics */
            readonly Phrases_dynamics: string;
            /** @default Project settings */
            readonly Project_settings: string;
            /** @default Keywords in TOP */
            readonly Phrases_in_TOP: string;
            /** @default Keywords in Top */
            readonly Phrases_in_Top: string;
            /** @default Page */
            readonly Page: string;
            /** @default page */
            readonly page: string;
            /** @default last 10 days */
            readonly last_10_days: string;
            /** @default last month */
            readonly last_month: string;
            /** @default last update */
            readonly last_check: string;
            /** @default last 2 updates */
            readonly last_two_dates: string;
            /** @default last month (week's average) */
            readonly last_month_week_average: string;
            /** @default similar keywords */
            readonly also_searched: string;
            /** @default Sources */
            readonly Sources: string;
            /** @default Clicks */
            readonly Clicks: string;
            /** @default Other dates */
            readonly Other_dates: string;
            /** @default Help */
            readonly Help_center: string;
            /** @default Support Center */
            readonly Help_center_welcome: string;
            /** @default Got any questions? */
            readonly Help_center_question: string;
            /** @default Run */
            readonly Run: string;
            /** @default Manage */
            readonly Manage: string;
            /** @default Project id is missing */
            readonly Missed_project_id: string;
            /** @default `Project_id` is missing */
            readonly Missed_project_id2: string;
            /** @default Project analytics */
            readonly Project_analytics: string;
            /** @default Keyword dynamics */
            readonly Project_dynamics: string;
            /** @default Updates */
            readonly Apometr: string;
            /** @default Google and Yandex SERP tracking tool */
            readonly Apometr_title: string;
            /** @default Google and Yandex updates calendar (SERP updates and changes). Get SERP updates alerts. SERP updates score for different locations and content types. */
            readonly Apometr_description: string;
            /** @default Google and Yandex SERP updates */
            readonly Apometr_og_title: string;
            /** @default SERP updates score for different locations and content types. */
            readonly Apometr_og_description: string;
            /** @default Get update alerts */
            readonly Apometr_notice: string;
            /** @default Pricing */
            readonly Pricing_title: string;
            /** @default Account */
            readonly Profile_title: string;
            /** @default Bank */
            readonly Bank_title: string;
            /** @default Your projects */
            readonly Your_projects: string;
            /** @default Invalid file format (expected: %availableExtensionsNames%) */
            readonly Incorrect_file_format: string;
            /** @default Maximum upload size exceeded (%maxSize%) */
            readonly Max_size: string;
            /** @default Website SEO Audit tool */
            readonly Audit: string;
            /** @default Tutorials */
            readonly Tutorial: string;
            /** @default User ID */
            readonly User_id: string;
            /** @default Managing executive */
            readonly Managing_executive: string;
            /** @default Pustovoit */
            readonly Pustovoit: string;
            /** @default Denis */
            readonly Denis: string;
            /** @default Anatolyevich */
            readonly Anatolyevich: string;
            /** @default Chief Executive Officer */
            readonly CEO: string;
            /** @default office */
            readonly office: string;
            /** @default Dot */
            readonly Dot: string;
            /** @default Comma */
            readonly Comma: string;
            /** @default Add manually */
            readonly Enter_manually: string;
            /** @default max 10 Mb */
            readonly max_10_mb: string;
            /** @default Checks schedule */
            readonly Schedule_settings_checks: string;
            /** @default Reports schedule */
            readonly Schedule_settings_reports: string;
            /** @default Basic */
            readonly Basic: string;
            /** @default IP address */
            readonly Address_IP: string;
            /** @default Phone number */
            readonly Phone_number: string;
            /** @default Recipient */
            readonly Recipient: string;
            /** @default  Federal act */
            readonly Federal_act: string;
            /** @default optional */
            readonly optional: string;
            /** @default Full name */
            readonly Full_name_abbr: string;
            /** @default Mobile phone */
            readonly Mobile_phone: string;
            /** @default not found */
            readonly not_found: string;
            /** @default Try to <i class="a" data-action="reset_filters">reset</i> all filters<br><i class="archive_search">
             *     	or search <a href="/support/projects/archive" target="_blank" class="a">Archived</a> projects</i> */
            readonly Try_to_reset_filters_or_search_archive_html: string;
            /** @default Print */
            readonly Print: string;
            /** @default Contact us */
            readonly Contact_us: string;
            /** @default Competitor research */
            readonly Competitor_analysis: string;
            /** @default Top up your balance */
            readonly Refill_balance: string;
            /** @default Median */
            readonly Median: string;
            /** @default Reset */
            readonly Reset: string;
            /** @default View */
            readonly View: string;
            /** @default Pin bar */
            readonly Bar_pin: string;
            /** @default Number */
            readonly Count: string;
            /** @default Invalid URL format */
            readonly Invalid_url: string;
            /** @default Access settings */
            readonly Access_settings: string;
            /** @default Hide access settings */
            readonly Hide_access_settings: string;
            /** @default Sort */
            readonly Sort: string;
            /** @default No snippet */
            readonly No_snippet: string;
            /** @default Copied to clipboard */
            readonly Copied_to_clipboard: string;
            /** @default Cannot copied to clipboard */
            readonly Cannot_copied_to_clipboard: string;
            /** @default Copy the guest link manually */
            readonly Copy_guest_link_manually: string;
            /** @default Press */
            readonly Press_to_copy_1: string;
            /** @default +C to copy a link */
            readonly Press_to_copy_2: string;
            /** @default Guest link created */
            readonly Guest_link_created: string;
            /** @default Please fill in all required fields */
            readonly Need_fill_required_fields: string;
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
