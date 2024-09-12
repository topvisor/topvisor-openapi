/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "I18n.Projects": {
            /** @constant */
            Add_project_title?: "Add project";
            /** @constant */
            Enter_project_name?: "Enter project name";
            /** @constant */
            Site?: "Project URL";
            /** @constant */
            Keywords?: "Keywords";
            /** @constant */
            Broker?: "Bid manager";
            /** @constant */
            Analytics?: "Analytics and reports";
            /** @constant */
            Add_project_url?: "Enter website or webpage URL";
            /** @constant */
            Del_project_title?: "Delete project";
            /** @constant */
            Del_project_question?: "Are you sure you want to delete project";
            /** @constant */
            Del_selected_projects_question?: "Are you sure you want to delete the selected projects?";
            /** @constant */
            Del_folder_question?: "Are you sure you want to delete this project?<br><br>Projects will be moved to the root folder";
            /** @constant */
            Check_positions?: "Check Rankings";
            /** @constant */
            Check_positions_with_filter?: "Apply filter and check rankings (search engine / location / folder / group)";
            /** @constant */
            domain_missed?: "Domain not specified, check \"site\" parameter";
            /** @constant */
            Incorrect_domain?: "Invalid domain name";
            /** @constant */
            owner_rights_error?: "You can't change project owner access settings";
            /** @constant */
            Edit_positions_notice_to_wait?: "We are assigning project tasks, settings will be available within a minute";
            /** @constant */
            Searcher_missed?: "Search engine provider missed";
            /** @constant */
            Searcher_exists?: "This search engine already added to the project";
            /** @constant */
            Region_exists?: "Location with applied settings already added";
            /** @constant */
            Region_not_available?: "You can't add this location";
            /** @constant */
            Project_not_available_for_Youtube?: "Youtube rank tracking is not available for this project";
            /** @constant */
            Searcher_not_found?: "Search engine not found";
            /** @constant */
            You_are_owner?: "You are the project owner already";
            /** @constant */
            Add_to_favorites?: "Add to favorites";
            /** @constant */
            User_not_exists?: "This user doesn't exist";
            /** @constant */
            ChangeOwner_message1?: "You received full access to the project";
            /** @constant */
            ChangeOwner_message2?: "To accept project transfer and start working on it, click \"Accept project\".";
            /** @constant */
            ChangeOwner_message3?: "Accept project";
            /** @constant */
            ChangeOwner_title?: "Project transfer";
            /** @constant */
            AcceptChangeOwner_msg1?: "The project was delegated by the user who is no longer a project owner.";
            /** @constant */
            AcceptChangeOwner_msg2?: "You have become the project owner of";
            /** @constant */
            Competitors_add?: "Add competitors";
            /** @constant */
            Competitors_add2?: "Add competitors";
            /** @constant */
            Competitors_price_1?: "Keyword research cost";
            /** @constant */
            Competitors_price_2?: "$";
            /** @constant */
            Competitor_site_missed?: "Competitor site not specified";
            /** @constant */
            Competitor_double?: "Competitor already exists";
            /** @constant */
            Competitor_Wrong_data?: "Invalid data format";
            /** @constant */
            Youtube_competitor_error?: "Competitor must match youtube.com* wildcard";
            /** @constant */
            Competitor_count_error?: "You can't add more than 250 competitors";
            /** @constant */
            Check_campaigns_acess_and_API_permission?: "Check campaign access and API permission";
            /** @constant */
            Sum_for_pay?: "Project owner will be charged";
            /** @constant */
            Visits_in_yandex?: "Visits on Yandex";
            /** @constant */
            Visits_in_google?: "Visits on Google";
            /** @constant */
            Visits_in_mail?: "Visits on Mail.ru";
            /** @constant */
            Info_cost?: "You will be charged";
            /** @constant */
            Last_update?: "Last check";
            /** @constant */
            Keywords_in_top?: "TOP 10/11-30/30+";
            /** @constant */
            Dynamics?: "Dynamics";
            /** @constant */
            Traffic?: "Traffic in SE";
            /** @constant */
            Indexed?: "Index status";
            /** @constant */
            Links?: "Links";
            /** @constant */
            Average_position?: "Avg.pos.";
            /** @constant */
            Visibility?: "Vis-ty";
            /** @constant */
            Register_domain?: "Domain registration";
            /** @constant */
            Archive_project?: "Archive";
            /** @constant */
            Unarchive_project?: "Restore";
            /** @constant */
            Extend?: "Renew";
            /** @constant */
            Extend_domain?: "Renew your domain";
            /** @constant */
            Transfer_domain?: "Transfer your domain";
            /** @constant */
            Yandex_short?: "Y:";
            /** @constant */
            Yandex_SQI?: "SQI";
            /** @constant */
            No_tag?: "Default tag";
            /** @constant */
            Edit?: "Edit";
            /** @constant */
            My_projects?: "My projects";
            /** @constant */
            Scheduled_update?: "Scheduled update";
            /** @constant */
            Manual_update?: "Manual update";
            /** @constant */
            Guest_projects?: "Guest projects";
            /** @constant */
            Guest_my_projects?: "My and guest projects";
            /** @constant */
            Archived_projects?: "Archived projects";
            /** @constant */
            Add_project?: "Add project";
            /** @constant */
            Current_registrar?: "Current registrar";
            /** @constant */
            Info_archived?: "You are going to archive your project. Archived projects are suspended and unavailable.";
            /** @constant */
            Info_archived_html?: "You are going to archive the <i class=\"one\">project</i><i class=\"several\">selected projects</i>. Archived projects are suspended and unavailable.";
            /** @constant */
            Accept_unarchive?: "Do you really want to restore this project from the archive?";
            /** @constant */
            Info_unarchive_html?: "Do you really want to restore the <i class=\"one\">project</i><i class=\"several\">selected projects</i>?";
            /** @constant */
            Archive?: "Archive";
            /** @constant */
            Unarchive?: "Restore";
            /** @constant */
            Info_bulk_update?: "Check Rankings";
            /** @constant */
            Bulk_update?: "Check Rankings";
            /** @constant */
            No_bulk_update_projects?: "There are no projects available for bulk update";
            /** @constant */
            Registration_date?: "Registered";
            /** @constant */
            Domain_valid_until?: "Domain expires";
            /** @constant */
            Deleted_date?: "Deleted";
            /** @constant */
            Domain_extended_time?: "Domain to renew after";
            /** @constant */
            Extend_current_cost?: "Your<br>domain renewal costs";
            /** @constant */
            Extend_axelname?: "Renew your domain with <br> ";
            /** @constant */
            Update_tpa?: "Update the key";
            /** @constant */
            Copy_with_settings?: "Copy project and main settings";
            /** @constant */
            Copy_keywords?: "Copy keywords";
            /** @constant */
            Copy_dynamics?: "Copy keyword ranking history";
            /** @constant */
            Copy?: "Copy";
            /** @constant */
            A_copy?: "Copy";
            /** @constant */
            Copy_project?: "Copy project";
            /** @constant */
            Report_on_weekdays?: "On days of week";
            /** @constant */
            Report_custom_frequency?: "Custom frequency";
            /** @constant */
            Send_competitor_report?: "Send competition report";
            /** @constant */
            Report_format?: "Report format";
            /** @constant */
            Send_test_report?: "Test report";
            /** @constant */
            Test_report_sent_email?: "Test report has been successfully sent to your email";
            /** @constant */
            Test_report_sent?: "Test report successfully sent";
            /** @constant */
            Access_add_user?: "Add user";
            /** @constant */
            company_logo?: "company logo";
            /** @constant */
            Settings_no_automated_update_if_manual?: "Do not run scheduled update if rankings were checked on demand less than 12 hours ago";
            /** @constant */
            Settings_particular_days?: "On dates";
            /** @constant */
            After_updates?: "After Yandex updates";
            /** @constant */
            After_update?: "After Yandex update";
            /** @constant */
            immediately?: "immediately";
            /** @constant */
            in_hour?: "in %hour% h.";
            /** @constant */
            Settings_on_demand?: "On demand";
            /** @constant */
            Advanced_options?: "Tool settings";
            /** @constant */
            Do_not_collect?: "Do not collect";
            /** @constant */
            Collect?: "Collect";
            /** @constant */
            Subdomains?: "Subdomains";
            /** @constant */
            Subdomains_do_not_check?: "Do not check";
            /** @constant */
            Subdomains_check?: "Check";
            /** @constant */
            Search_filter?: "Search filter";
            /** @constant */
            Do_not_filter?: "Do not filter";
            /** @constant */
            Moderate_filtering?: "Moderate";
            /** @constant */
            Family_search?: "Family search";
            /** @constant */
            Spelling?: "Spelling";
            /** @constant */
            Do_not_correct_spelling?: "Do not correct";
            /** @constant */
            Correct_spelling?: "Correct";
            /** @constant */
            Traffic_segmentation?: "Traffic segmentation";
            /** @constant */
            Local_traffic?: "By region";
            /** @constant */
            Global_traffic?: "Global";
            /** @constant */
            Select_se?: "Pick search engine";
            /** @constant */
            Integrate_denied?: "Denied";
            /** @constant */
            Integrate_account_locked?: "You seem to be logged out of your account";
            /** @constant */
            Schedule?: "Schedule";
            /** @constant */
            Competitors?: "Competitors";
            /** @constant */
            of_competitors?: "competitors";
            /** @constant */
            Access?: "Access";
            /** @constant */
            Project_archived_notice?: "Project is archived, access to features is limited.";
            /** @constant */
            Project_archived_90days_notice?: "Projects inactive during 180 days are archived automatically";
            /** @constant */
            Projects_archived?: "Projects are archived";
            /** @constant */
            Popular?: "Popular";
            /** @constant */
            Other?: "Other";
            /** @constant */
            Select_project?: "Select project";
            /** @constant */
            To_list_of_projects?: "List of projects";
            /** @constant */
            Search_projects?: "Search projects";
            /** @constant */
            Delegation?: "Project transfer";
            /** @constant */
            Activate_deactivate_competitors?: "Enable/Disable all competitors";
            /** @constant */
            Wipe_all_competitors?: "Are you sure you want to wipe all competitors?";
            /** @constant */
            Wipe_competitors_note?: "Wipe competitors";
            /** @constant */
            Reporting_period?: "Reporting period";
            /** @constant */
            Do_not_ask?: "Do not ask me again";
            /** @constant */
            To_accept_project_click_msg?: "To accept a project <b>%project_name%</b> transfer, click the message";
            /** @constant */
            Reports_send_to_address?: "Send to";
            /** @constant */
            Checks?: "Tools";
            /** @constant */
            Reports?: "Reports";
            /** @constant */
            Access_to_project?: "Share project";
            /** @constant */
            Transfer_project?: "Transfer project";
            /** @constant */
            Do_not_brand?: "Do not apply branding";
            /** @constant */
            Show_account_balance?: "Show your account balance";
            /** @constant */
            To_previous_step?: "Previous step";
            /** @constant */
            Next?: "Next";
            /** @constant */
            Keyword_import?: "Keyword import";
            /** @constant */
            Competitor_settings?: "Add competitors";
            /** @constant */
            Se_and_locations?: "Search engines and locations";
            /** @constant */
            Completed?: "Completed";
            /** @constant */
            Track_rankings?: "Track rankings";
            /** @constant */
            Start_audit?: "Start site audit";
            /** @constant */
            Start_watcher?: "Start watcher";
            /** @constant */
            Start_indexing?: "Start indexing";
            /** @constant */
            Start_sitemap?: "Sitemap generator";
            /** @constant */
            Main_settings?: "Main settings";
            /** @constant */
            Create_project?: "Create project";
            /** @constant */
            Select_type_add_name_url?: "Select a project type, add a URL and a name";
            /** @constant */
            Enter_youtube_URL?: "Enter the URL of a channel (youtube.com/@user) or a video (youtube.com/watch?v=...)";
            /** @constant */
            Enter_app_URL?: "Enter app URL";
            /** @constant */
            Enter_domain_or_page?: "Enter domain (example.com) or page URL (example.com/page/)";
            /** @constant */
            Site_or_page?: "Site or webpage";
            /** @constant */
            Add_project_name?: "Enter project name";
            /** @constant */
            Created_date?: "Created";
            /** @constant */
            Project_owner?: "Project owner";
            /** @constant */
            Add_keywords?: "Add keywords";
            /** @constant */
            Add_keywords_button?: "Add keywords";
            /** @constant */
            Keywords_for_import?: "Keywords";
            /** @constant */
            Enter_keywords_one_per_line?: "Enter keywords, one per line";
            /** @constant */
            Recommended_keywords?: "Keyword ideas";
            /** @constant */
            Add_selected?: "Add selected";
            /** @constant */
            Added_keywords?: "Added keywords";
            /** @constant */
            Group_manage_tags_on_page?: "Group and manage tags at";
            /** @constant */
            see?: "see";
            /** @constant */
            Add_competitors?: "Add competitors";
            /** @constant */
            My_competitors?: "My competitors";
            /** @constant */
            Competitor_URL?: "Competitor URL";
            /** @constant */
            Competitor_name?: "Competitor name";
            /** @constant */
            Find_competitors?: "Find competitors";
            /** @constant */
            Suggested_competitors?: "Suggested competitors";
            /** @constant */
            Get_search_volume?: "Check search volume";
            /** @constant */
            Check_keyword_rankings?: "Check keyword rankings";
            /** @constant */
            Project_setup_completed?: "Project setup completed";
            /** @constant */
            Add_search_engines_and_locations?: "Add search engines and locations";
            /** @constant */
            Select_search_engine?: "Select search engine";
            /** @constant */
            Press_search_engine_icon_to_add_location?: "Press a search engine icon and add a location";
            /** @constant */
            You_can_manage_locations_in_settings?: "You can manage added locations in project settings";
            /** @constant */
            Enter_location_or_yandex_code?: "Enter Location or its Yandex code";
            /** @constant */
            Locations?: "Locations";
            /** @constant */
            Skip_wizard?: "Do not run setup wizard";
            /** @constant */
            Setup_rank_tracker?: "Set up rank tracking";
            /** @constant */
            Setup_audit?: "Set up site audit";
            /** @constant */
            Setup_audit_urls?: "Pages for audit";
            /** @constant */
            Setup_watcher?: "Set up site watcher";
            /** @constant */
            Setup_watcher_urls?: "Pages for watcher";
            /** @constant */
            Setup_indexing?: "Set up site indexing";
            /** @constant */
            Setup_indexing_urls?: "Pages for indexing";
            /** @constant */
            Setup_sitemap?: "Set up sitemap generation";
            /** @constant */
            Add_all_recommended?: "Add all recommended";
            /** @constant */
            Delete_keywords_from_orginal_project?: "Delete keywords from the orginal project";
            /** @constant */
            Project_name?: "Name";
            /** @constant */
            Project_projects_selected?: "Selected";
            /** @constant */
            Create_your_first_project?: "Create your first project";
            /** @constant */
            No_projects_match_filter?: "No projects match filter";
            /** @constant */
            Enter_folder_name?: "Enter folder name";
            /** @constant */
            Add_keywords_se_locations_to_check_notice?: "No tasks found. Add keywords, a search engine and a location in the project settings";
            /** @constant */
            Summary_by_location?: "Summary by location";
            /** @constant */
            Project_type?: "Project type";
            /** @constant */
            Project_folder?: "Project folder";
            /** @constant */
            Selected_project_type?: "Selected project type";
            /** @constant */
            Cost_for_guest_project_owner?: "Project owner will be charged";
            /** @constant */
            Move_to_folder?: "Move to folder";
            /** @constant */
            Open_in_new_tab?: "Open in new tab";
            /** @constant */
            In_queue?: "In queue";
            /** @constant */
            In_progress?: "In progress";
            /** @constant */
            URL_count?: "Number of URLs";
            /** @constant */
            Username?: "Username";
            /** @constant */
            Spent?: "Spent";
            /** @constant */
            Spend_limit?: "Spend limit";
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
