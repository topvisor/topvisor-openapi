/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "I18n.User": {
            /** @constant */
            Account?: "Account";
            /** @constant */
            Name?: "Name";
            /** @constant */
            Password?: "Password";
            /** @constant */
            password_updated?: "updated";
            /** @constant */
            Theme?: "Тема оформления";
            /** @constant */
            Encoding?: "Character encoding";
            /** @constant */
            Delimiter?: "Delimiter";
            /** @constant */
            Dec_point?: "Decimal point";
            /** @constant */
            Current_time?: "Time zone";
            /** @constant */
            Date_format?: "Date format";
            /** @constant */
            Push_notifications?: "Push notifications";
            /** @constant */
            Push_enabled?: "Enabled";
            /** @constant */
            Push_disabled?: "Disabled";
            /** @constant */
            Push_disable_browser?: "You can turn off notifications in the browser settings";
            /** @constant */
            Push_enable_browser?: "You can turn on notifications in the browser settings";
            /** @constant */
            Push_enable?: "Enable";
            /** @constant */
            Link_account?: "Linked accounts";
            /** @constant */
            Remove_account?: "Remove - ";
            /** @constant */
            API_key?: "API Key";
            /** @constant */
            API_key_not_generated?: "Not generated";
            /** @constant */
            Confirmation_msg_notice_1?: "We have sent a confirmation message to ";
            /** @constant */
            Confirmation_msg_notice_2?: ". Click a confirmation link to change your Email address. If you don't receive the message,<br> please check your Spam Email folder.";
            /** @constant */
            Confirmation_msg_notice_3?: ".";
            /** @constant */
            Change_email_message?: "We've sent you a email change confirmation. Follow the link in the email to change your account email.";
            /** @constant */
            card_activation_notice?: "to your account after card activation";
            /** @constant */
            Rank_cashback_notice?: "of all monthly payments are sent back to your account on the 1st day of each month";
            /** @constant */
            Rank_participant_code?: "Participant code";
            /** @constant */
            Export?: "Export";
            /** @constant */
            Informer?: "Notification Center";
            /** @constant */
            Informer_balance_decrease?: "Balance reached";
            /** @constant */
            Informer_new_ticket_response?: "New ticket replies";
            /** @constant */
            Informer_sms_cost?: "1 - Paid service. 1 SMS costs $0,01";
            /** @constant */
            Export_period?: "Period";
            /** @constant */
            Guest_project?: "Guest";
            /** @constant */
            Archived_project?: "Archived";
            /** @constant */
            Export_keywords_number?: "Total keyword count";
            /** @constant */
            Export_tracked_ranks_number?: "Checked keyword rankings";
            /** @constant */
            Export_cost?: "Export cost";
            /** @constant */
            Export_prepare?: "Prepare export";
            /** @constant */
            Export_start?: "Export";
            /** @constant */
            Archives?: "Archives";
            /** @constant */
            Menu_account?: "Account settings";
            /** @constant */
            Menu_notifications?: "Notifications";
            /** @constant */
            Menu_bulk_operations?: "Bulk operations";
            /** @constant */
            Menu_account_stats?: "Account stats";
            /** @constant */
            Menu_XML_transfer?: "XML transfer";
            /** @constant */
            New_email?: "New email";
            /** @constant */
            Current_pwd?: "Your password";
            /** @constant */
            Change_email?: "Update email address";
            /** @constant */
            Email_change?: "Update email address";
            /** @constant */
            New_pwd?: "New password";
            /** @constant */
            Confirm_new_pwd?: "Confirm new password";
            /** @constant */
            Change_pwd?: "Change password";
            /** @constant */
            Pwd_change?: "Change password";
            /** @constant */
            White_label?: "Branded reports";
            /** @constant */
            Branded_reports?: "Branded reports";
            /** @constant */
            formats?: "formats";
            /** @constant */
            max_height?: "max. height";
            /** @constant */
            User_scripts?: "User scripts";
            /** @constant */
            Brand_settings?: "Manage brand settings";
            /** @constant */
            Company_name?: "Company name";
            /** @constant */
            Company_logo?: "Company logo";
            /** @constant */
            Logo_required_format_notice?: "Required company logo format is";
            /** @constant */
            Logo_required_size_notice?: "Required company logo size should be up to";
            /** @constant */
            Logo_required_height_notice?: "Max company logo height is";
            /** @constant */
            Cannot_form_report_without_updates?: "At least one project update required to generate a report";
            /** @constant */
            logo_required_format?: "required image formats: .png, .svg";
            /** @constant */
            logo_required_height?: "required height: 50px";
            /** @constant */
            Link_email_notice?: "* Link your email to get full access to all features";
            /** @constant */
            to_password_form?: " into this form";
            /** @constant */
            Confirm_owner_status_notice?: "** to confirm that you are the account owner";
            /** @constant */
            Short_name?: "This name is too short";
            /** @constant */
            Pass_min_length?: "This password is too short";
            /** @constant */
            PWS_not_equal?: "The passwords do not match!";
            /** @constant */
            Email_exists?: "This email already exists";
            /** @constant */
            Email_exists2?: "This email exists in the system";
            /** @constant */
            Email_exists3?: "This email already exists. <br>In order to link it to this account enter your password from ";
            /** @constant */
            Join_email?: "Join e-mail";
            /** @constant */
            Enter_password_for_email?: "Enter password for this e-mail";
            /** @constant */
            Email_changed_from_to?: "Your email address has been successfully changed from ";
            /** @constant */
            Registration_invite_sended_1?: "Invitation to ";
            /** @constant */
            Registration_invite_sended_2?: " was sent successfully";
            /** @constant */
            Registration_invite_sended_error?: "Message hasn't been sent due to error";
            /** @constant */
            System_reg_msg1?: "Confirmation message sent to ";
            /** @constant */
            System_reg_msg2?: " ";
            /** @constant */
            Invalid_code?: "The code is invalid or has been used";
            /** @constant */
            Retrieve_system_msg?: "We have sent you password reset instructions";
            /** @constant */
            Yandex_XML_auth_error?: "Yandex XML authorization error";
            /** @constant */
            Rank_code_not_available?: "Code is invalid or has been used";
            /** @constant */
            Rank_recurrent_sending_code_not_available?: "You can activate achievement only once";
            /** @constant */
            Rank_date_expired?: "Activation period has expired";
            /** @constant */
            Twitter_error_binding_accounts1?: "Link your Twitter account to log in with Twitter.";
            /** @constant */
            Twitter_error_binding_accounts2?: "Otherwise, we will not be able to identify you in Twitter";
            /** @constant */
            Twitter_login_not_found?: "We couldn't find your login in Twitter, please submit a ticket and report the issue to Customer support";
            /** @constant */
            Twitter_servers_error?: "Twitter server error";
            /** @constant */
            Required_signing?: "Follow ";
            /** @constant */
            Twitter_retweet_required?: "Please retweet us";
            /** @constant */
            Push_button?: "Click Activate";
            /** @constant */
            Rank_canceled?: "You lost achievement";
            /** @constant */
            XML_monster_deactivate_title?: "You lost the XML monster card";
            /** @constant */
            XML_monster_deactivate_msg?: "Your \"XML monster\" card is no longer active as you are not transferring more limits than everyone else anymore";
            /** @constant */
            XML_monster_activate_title?: "You received the \"XML monster\" card!";
            /** @constant */
            XML_monster_activate_msg?: "Your \"XML monster\" card is activated as you have transferred more XML limits than everyone else";
            /** @constant */
            Rank_ppcchat_deactivate_title?: "You lost the \"PPC Chat member\" achievement";
            /** @constant */
            Rank_seochat_deactivate_title?: "You lost the \"SEO Chat member\" achievement";
            /** @constant */
            Rank_ppcchat_activate_title?: "You received the \"PPC Chat member\" achievement!";
            /** @constant */
            Rank_seochat_activate_title?: "You received the \"SEO Chat member\" achievement!";
            /** @constant */
            Ranks_retweet?: "Retweet ";
            /** @constant */
            Ranks_twitter_follower?: "Twitter follower";
            /** @constant */
            Ranks_activate?: "Activate";
            /** @constant */
            Ranks_twitter_post?: "a post";
            /** @constant */
            Ranks_twitter_incomplete_notice?: "You need to complete all steps!";
            /** @constant */
            Access?: "Manage access";
            /** @constant */
            Access_emails?: "Who can access";
            /** @constant */
            Access_view_project?: "View project";
            /** @constant */
            Access_track_ranks?: "Rank tracker";
            /** @constant */
            Access_view_traffic?: "Traffic data";
            /** @constant */
            Access_view_analytics?: "Analytics reports";
            /** @constant */
            Access_view_AMS?: "Search volume";
            /** @constant */
            Access_project?: "Project";
            /** @constant */
            Access_restrict?: "Restrict access";
            /** @constant */
            Access_view_summary?: "Summary";
            /** @constant */
            Access_apply_to_selected?: "Apply to selected";
            /** @constant */
            Access_grant_access?: "Grant access";
            /** @constant */
            Access_user_email?: "User email";
            /** @constant */
            Access_guest_link?: "Guest link";
            /** @constant */
            Access_count?: "";
            /** @constant */
            Access_select_dates?: "Allow to pick dates";
            /** @constant */
            Access_add_user?: "Add user";
            /** @constant */
            Change_project_owner?: "Project transfer";
            /** @constant */
            Pending_project_transfer_1?: "Pending, until";
            /** @constant */
            Pending_project_transfer_2?: "confirms project transfer.";
            /** @constant */
            Transfer_project?: "Transfer";
            /** @constant */
            Access_manage?: "Manage access";
            /** @constant */
            integration_not_connected?: "not connected";
            /** @constant */
            Integration_connect?: "Connect";
            /** @constant */
            Integration_valid_till?: "Key expires";
            /** @constant */
            Integration_counter_not_selected?: "Select a counter";
            /** @constant */
            Integration_no_counters_found?: "No counters found";
            /** @constant */
            Integration_get_fresh_data?: "Update";
            /** @constant */
            Integration_expires_in?: "Expires in";
            /** @constant */
            Integration_days_1?: "days";
            /** @constant */
            Integration_days_2?: "days";
            /** @constant */
            Integration_days_3?: "days";
            /** @constant */
            Integration_extend?: "Extend";
            /** @constant */
            Integration_disconnect?: "Disconnect";
            /** @constant */
            Integration_integrate_ad_campaigns?: "Integrate ad campaigns";
            /** @constant */
            Integration_no_campaigns_for_edit?: "We found no available campaigns to manage in your account.";
            /** @constant */
            Preferences?: "Account";
            /** @constant */
            preferences?: "account";
            /** @constant */
            account_link?: "your account settings";
            /** @constant */
            Bank?: "Bank";
            /** @constant */
            Bulk_operations?: "Bulk operations";
            /** @constant */
            Password_emailed?: "We have emailed a password to";
            /** @constant */
            Password_new_emailed?: "We have sent a new password to";
            /** @constant */
            Change_password_notice?: "You can change your password in ";
            /** @constant */
            Widget?: "Widget";
            /** @constant */
            Analytcis_top?: "Top";
            /** @constant */
            Analytcis_metric?: "Metric";
            /** @constant */
            Analytcis_by_keywords?: "Keywords";
            /** @constant */
            Analytcis_by_groups?: "Group";
            /** @constant */
            Analytcis_by_folders?: "Folder";
            /** @constant */
            Analytcis_by_locations?: "Location";
            /** @constant */
            Analytcis_by_competitors?: "Competitors";
            /** @constant */
            Analytcis_by_top?: "Top";
            /** @constant */
            Analytics_regions_not_selected?: "Locations not selected";
            /** @constant */
            Analytcis_by_tag?: "By tag";
            /** @constant */
            Analytics_narrow?: "Minimize";
            /** @constant */
            Analytics_widen?: "Expand";
            /** @constant */
            Analytics_show_widget_other_accounts?: "Show the widget to guest users";
            /** @constant */
            Shortener_short_link?: "Short link";
            /** @constant */
            Shortener_short_links?: "Short links";
            /** @constant */
            Shortener_add_url_here?: "Paste URL http://... and press Enter";
            /** @constant */
            Shortener_search_url?: "Search URL...";
            /** @constant */
            Shortener_turn_long_to_short?: "Shorten URLs and share compact links to webpages. Stats and analytics: visit count by source (social media and websites).";
            /** @constant */
            Shortener_turn_long_to_short_1?: "Shorten links and share compact URLs. Quick, handy, stats!";
            /** @constant */
            Shortener_total_clicks?: "Total clicks";
            /** @constant */
            Shortener_total_unique_clicks?: "Total unique clicks";
            /** @constant */
            Hide_this_message?: "Hide this message";
            /** @constant */
            Need_to_top_up_balance?: "Top up your balance first";
            /** @constant */
            PWD_changed?: "Your password was successfully changed!";
            /** @constant */
            Change_profile_pic?: "Change profile picture";
            /** @constant */
            Upload_pic?: "Upload";
            /** @constant */
            Positions_reverse_dates_0?: "Default (display the recent update first)";
            /** @constant */
            Positions_reverse_dates_1?: "Reverse (display the first update first)";
            /** @constant */
            Positions_reverse_dates_label?: "Date order";
            /** @constant */
            Remember_selected_locations?: "Remember selected locations";
            /** @constant */
            Additional_top_segment?: "Addit. top segment";
            /** @constant */
            Sign_out_of_all_accounts?: "Sign out of all accounts";
            /** @constant */
            Settings_header_apps?: "Apps";
            /** @constant */
            Settings_header_format?: "Format";
            /** @constant */
            Settings_header_rank_tracker?: "Rank tracker";
            /** @constant */
            Login?: "Login";
            /** @constant */
            Site?: "Site";
            /** @constant */
            Limit?: "Limit";
            /** @constant */
            Used?: "Used";
            /** @constant */
            Project_import?: "Project import";
            /** @constant */
            Provide_access_details?: "Provide access details to the selected tool to transfer your projects";
            /** @constant */
            Provide_access_to_service_for_transfer?: "Provide access details to the selected tool to transfer your projects";
            /** @constant */
            Service_to_transfer_from?: "Tool";
            /** @constant */
            Service_other_name?: "Tool name";
            /** @constant */
            Import?: "Import";
            /** @constant */
            Projects_to_import?: "Projects to import";
            /** @constant */
            Project_name?: "Project name";
            /** @constant */
            Migration?: "Migration";
            /** @constant */
            Selected_projects?: "Selected projects";
            /** @constant */
            Active_projects?: "Active projects";
            /** @constant */
            Migration_request_accepted_notice?: "<p>Your migration request has been received and will be processed shortly.<br>Estimated time of project\timport with ranking history is from 1 to 2 hours (weekdays).</p><p>We'll get back to you as soon as migration is completed.</p>";
            /** @constant */
            These_limits_already_being_used_by_owner?: "These limits are already being used by their owner";
            /** @constant */
            Invalid_email_error?: "Invalid Email";
            /** @constant */
            Email_limit_error?: "Maximum number of email addresses added";
            /** @constant */
            achievements_form1?: "achievements";
            /** @constant */
            achievements_form2?: "achievement";
            /** @constant */
            achievements_form3?: "achievements";
            /** @constant */
            Decimals?: "Decimal point";
            /** @constant */
            Other_settings?: "Other";
            /** @constant */
            Unavailable_key_notice?: "After changing the key, access with the old key will be restricted. Do you want to continue?";
            /** @constant */
            Linked_accounts?: "Linked accounts";
            /** @constant */
            Vkontakte?: "Vkontakte";
            /** @constant */
            Save_changes?: "Save changes";
            /** @constant */
            Change_name?: "Change name";
            /** @constant */
            Update_picture?: "Upload picture";
            /** @constant */
            Edit_picture?: "Edit picture";
            /** @constant */
            Delete_picture?: "Delete picture";
            /** @constant */
            Current_email?: "Current Email";
            /** @constant */
            Your_password?: "Your password";
            /** @constant */
            Confirm_new_password?: "Confirm new password";
            /** @constant */
            Other_service?: "Other";
            /** @constant */
            Min_balance?: "Minimum balance";
            /** @constant */
            Bio?: "Bio";
            /** @constant */
            Change_currency_guest_projects_notice?: "Please note that you should remove all guest projects from your account to change the currency. The access to the projects can only be shared between accounts with the same currency.";
            /** @constant */
            User_info?: "User info";
            /** @constant */
            Profile_url?: "Profile URL";
            /** @constant */
            Promo_text?: "Promo text";
            /** @constant */
            Promo_button?: "Promo button";
            /** @constant */
            Promo_button_text?: "Text on the button";
            /** @constant */
            Promo_button_link?: "Link on the button";
            /** @constant */
            View_the_author_page?: "View the author's page";
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
