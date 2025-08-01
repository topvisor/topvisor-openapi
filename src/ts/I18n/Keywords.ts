/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "I18n.Keywords": {
            /** @constant */
            readonly Average: "Average";
            /** @constant */
            readonly phrase_missed: "Keyword not selected";
            /** @constant */
            readonly group_not_exists: "Group not found in the project";
            /** @constant */
            readonly keyword_not_exists: "Keyword not found in the project";
            /** @constant */
            readonly incorrect_phrase: "Invalid keyword";
            /** @constant */
            readonly phrase_exists: "This keyword already exists";
            /** @constant */
            readonly import_error_columns: "The number of columns in some lines doesn't match the number in other lines.";
            /** @constant */
            readonly import_error_columns2: " If you import keywords from a CSV file, please place all keywords with special characters (comma (,), semicolon (;)) in double quotation marks (\")";
            /** @constant */
            readonly import_error1: "You haven't selected keywords to import";
            /** @constant */
            readonly Add_phrase: "Add keyword";
            /** @constant */
            readonly Add_group: "Add new group";
            /** @constant */
            readonly New_folder: "New folder";
            /** @constant */
            readonly New_group: "New group";
            /** @constant */
            readonly Access_error: "Keyword not found or access denied";
            /** @constant */
            readonly CSV_group: "Group";
            /** @constant */
            readonly CSV_phrase: "Keyword";
            /** @constant */
            readonly CSV_rel: "Ranked page";
            /** @constant */
            readonly CSV_snippet_title: "Snippet titles";
            /** @constant */
            readonly CSV_snippet: "Snippet";
            /** @constant */
            readonly CSV_target: "Target URL";
            /** @constant */
            readonly CSV_visits: "Traffic";
            /** @constant */
            readonly CSV_google_price: "Bid";
            /** @constant */
            readonly CSV_yandex_price1: "1-st Premium placement";
            /** @constant */
            readonly CSV_yandex_price2: "2-st Premium placement";
            /** @constant */
            readonly CSV_yandex_price3: "Premium placement";
            /** @constant */
            readonly CSV_yandex_price4: "1st place";
            /** @constant */
            readonly CSV_yandex_price5: "Guaranteed";
            /** @constant */
            readonly Targets_error: "Target URLs not changed";
            /** @constant */
            readonly Group_changing_denied: "You can't edit this group!";
            /** @constant */
            readonly Filtered_group: "Filtered group";
            /** @constant */
            readonly Export_dynamics_by_date: "Project export for";
            /** @constant */
            readonly Export_HTML_comparison_not_available: "html comparison is not available yet";
            /** @constant */
            readonly Reports_unsubscribing1: "Unsubscribe ";
            /** @constant */
            readonly Reports_unsubscribing2: "from project reports";
            /** @constant */
            readonly Project_report: "Project report for";
            /** @constant */
            readonly project_report_msg: "dated";
            /** @constant */
            readonly project_has_archived: "The project is not active. You can recover it in the projects list";
            /** @constant */
            readonly Not_enough_balance_for_check_position: "there are not enough funds in your account to track keyword rankings";
            /** @constant */
            readonly Position_check: "Keyword rank check of";
            /** @constant */
            readonly Position_check_with_snippet: "Track ranks and collect snippets";
            /** @constant */
            readonly Positions_check: "Keyword ranking report for";
            /** @constant */
            readonly Positions_select_se: "Add search engines in project settings";
            /** @constant */
            readonly Positions_check_with_snippets: "Keyword ranking and snippets report for";
            /** @constant */
            readonly Project_has_no_tasks?: "Add keywords: <a href=\"/project/keywords/%projectId%\">https://topvisor.com/project/keywords/%projectId%</a>. Add search engines and locations: <a href=\"/project/settings/%projectId%\">https://topvisor.com/project/settings/%projectId%</a>";
            /** @constant */
            readonly Keyword_ranking_already_started: "Keyword ranking already started";
            /** @constant */
            readonly Not_enough_balance_for_check_positions: "You do not have enough funds in your account to track keyword rankings";
            /** @constant */
            readonly Short_keywords: "Keywords are too short";
            /** @constant */
            readonly Semantic_kernel_composition: "Keyword research";
            /** @constant */
            readonly Semantic_kernel_composition_by_hints: "Keyword suggestions harvest";
            /** @constant */
            readonly Provider_incorrect: "`Provider` is incorrect";
            /** @constant */
            readonly Not_enough_balance: "There are not enough funds in your account";
            /** @constant */
            readonly Unchecked_wordstat_is_missing1: "Skipped search volume data in project";
            /** @constant */
            readonly Unchecked_wordstat_is_missing2: "for applied locations and search volume types there's no";
            /** @constant */
            readonly No_phrases_or_regions1: "The project has";
            /** @constant */
            readonly No_phrases_or_regions2: "no keywords or locations and search volume types are not selected";
            /** @constant */
            readonly Wordstat_check: "Search volume tracking for:";
            /** @constant */
            readonly depth: "research depth";
            /** @constant */
            readonly Claster_delay: "Assigning project tasks.<br>Clustering tool will be available within a minute";
            /** @constant */
            readonly Claster_task_bank: "Keyword clustering";
            /** @constant */
            readonly Claster_task_change_bank: "Re-calculate clustering cost";
            /** @constant */
            readonly Claster_already_doing: "Clustering is in process";
            /** @constant */
            readonly Claster_not_exists_last_results: "Previous keyword clustering results not found";
            /** @constant */
            readonly for_keyword: "to each keyword";
            /** @constant */
            readonly Get_group_search_volume: "Get group search volume";
            /** @constant */
            readonly Export_group: "Export from group";
            /** @constant */
            readonly Export_to_project: "Copy to another project";
            /** @constant */
            readonly Move_to_project: "Move to another project";
            /** @constant */
            readonly Block_mode_unavailable_notice: "Block mode is not available if you have over 6 000 keywords or too many groups";
            /** @constant */
            readonly Block_mode: "Block mode";
            /** @constant */
            readonly Table_mode: "Table mode";
            /** @constant */
            readonly Tags: "Tag No.";
            /** @constant */
            readonly Tags_names: "Tags";
            /** @constant */
            readonly Tags_disable: "Disable";
            /** @constant */
            readonly Set_tag: "Add tag";
            /** @constant */
            readonly Remove_tag: "Remove tags";
            /** @constant */
            readonly Add_tags: "Add tags";
            /** @constant */
            readonly Remove_tags: "Remove tags";
            /** @constant */
            readonly Set_tags: "Replace tags";
            /** @constant */
            readonly Import: "Keyword import";
            /** @constant */
            readonly Export: "Keyword export";
            /** @constant */
            readonly Target: "Target URL";
            /** @constant */
            readonly Target_status: "Target URL status";
            /** @constant */
            readonly Relevant_page: "Ranked URL";
            /** @constant */
            readonly CPC: "CPC";
            /** @constant */
            readonly Visits: "Traffic";
            /** @constant */
            readonly Snippet: "Snippet";
            /** @constant */
            readonly Research: "Research keywords";
            /** @constant */
            readonly Research_suggestions: "Collect keyword suggestions";
            /** @constant */
            readonly Research_keywords_se: "Research keywords";
            /** @constant */
            readonly Research_keywords_traffic: "Magnet tool";
            /** @constant */
            readonly To_research: "Research";
            /** @constant */
            readonly Group_number: "Groups";
            /** @constant */
            readonly Keyword_number: "Keywords";
            /** @constant */
            readonly Turn_on: "On";
            /** @constant */
            readonly Turn_off: "Off";
            /** @constant */
            readonly Enable_all_groups: "Turn on all groups";
            /** @constant */
            readonly Disable_all_groups: "Turn off all groups";
            /** @constant */
            readonly Select_all: "Select all";
            /** @constant */
            readonly Select_groups: "Select groups";
            /** @constant */
            readonly Highlight: "Select";
            /** @constant */
            readonly Trash_bin: "Trash bin";
            /** @constant */
            readonly Filter: "Filter";
            /** @constant */
            readonly Search_keyword: "Search keyword";
            /** @constant */
            readonly Get_search_volume: "Get search volume";
            /** @constant */
            readonly Clustering_tool: "Keyword clustering";
            /** @constant */
            readonly SE_location: "Search engine / Location";
            /** @constant */
            readonly Select_location: "Select location";
            /** @constant */
            readonly Select_another_location: "Select another location";
            /** @constant */
            readonly Clustering_level: "Clustering level";
            /** @constant */
            readonly Clustering_level_groups_relation: "Higher level clustering produces more groups with fewer keywords in every group.";
            /** @constant */
            readonly Clustering_changes_order_notice: "Keyword clustering changes groups and keyword order in your project. After clustering, keyword groups will be automatically disabled.";
            /** @constant */
            readonly Clustering_rel_notice: "Before grouping keywords by page relevance, make sure that you have checked<br> keyword rankings in the applied search engine and location.";
            /** @constant */
            readonly Cluster: "Clustering";
            /** @constant */
            readonly Cluster_TOP10: "Keyword clustering by TOP10";
            /** @constant */
            readonly Cluster_relevant_url: "Grouping by page relevance";
            /** @constant */
            readonly Cluster_target_url: "Grouping by target URLs";
            /** @constant */
            readonly Before_grouping_setup_target_urls: "Before grouping, make sure that target URLs are assigned. <a href=\"/support/rankings/target-url/setup/\" target=\"_blank\">How to setup target URLs →</a>";
            /** @constant */
            readonly Change_clustering_level: "Change clustering level";
            /** @constant */
            readonly Bounce_rate: "Bounce";
            /** @constant */
            readonly Pages_view: "Pages";
            /** @constant */
            readonly Time: "Time";
            /** @constant */
            readonly Del_group: "Delete group";
            /** @constant */
            readonly Sort_keywords: "Sort keywords";
            /** @constant */
            readonly Filter_phrases: "Filter keywords";
            /** @constant */
            readonly On_Off_group: "Enable / Disable a group";
            /** @constant */
            readonly Move_to_new_group: "Move to a new group";
            /** @constant */
            readonly Delete_group_warning: "<b>Important!</b><br>If you delete a group, all keywords in the group will be deleted immediately.";
            /** @constant */
            readonly Each_keyword_on_new_line: "Keywords (each keyword on a new line)";
            /** @constant */
            readonly Source: "Source";
            /** @constant */
            readonly Phrases_on_new_line: "Phrases (each one on a new line)";
            /** @constant */
            readonly Import_to_group: "Import into group";
            /** @constant */
            readonly Skip_duplicates: "Skip duplicates";
            /** @constant */
            readonly Move_duplicates: "Move duplicates";
            /** @constant */
            readonly Move_duplicates_another_group: "Move duplicates to another group";
            /** @constant */
            readonly Move_duplicates_another_group_name: "Where move duplicates?";
            /** @constant */
            readonly Match_type: "Match type";
            /** @constant */
            readonly Match_type_broad: "Volume";
            /** @constant */
            readonly Match_type_phrase: "Volume";
            /** @constant */
            readonly Match_type_exact: "Volume";
            /** @constant */
            readonly Match_type_strict: "Strict";
            /** @constant */
            readonly By_location: "For locations";
            /** @constant */
            readonly Check_old_searches: "Keywords with outdated volume";
            /** @constant */
            readonly Skip_tracked_searches: "Keywords without checked volume";
            /** @constant */
            readonly Check_active_groups_only: "Check active groups only";
            /** @constant */
            readonly By_total_searches: "By search volume";
            /** @constant */
            readonly By_rank: "By keyword rank (applied SE and Location)";
            /** @constant */
            readonly Sort_groups_by_searches: "Sort groups by total search volume";
            /** @constant */
            readonly Sort_keywords_by_searches: "Sort keywords in groups by search volume";
            /** @constant */
            readonly Sort_groups_alphabetically: "Sort groups alphabetically";
            /** @constant */
            readonly Sort_groups_by_date: "Sort groups by creation date";
            /** @constant */
            readonly Delete_empty_groups: "Delete empty groups";
            /** @constant */
            readonly Delete_inactive_groups: "Delete inactive groups";
            /** @constant */
            readonly Delete_groups_keywords: "Wipe all groups and keywords";
            /** @constant */
            readonly Set_color_tag: "Add color tag";
            /** @constant */
            readonly Group_name: "Group name";
            /** @constant */
            readonly move_to: "Move to the group";
            /** @constant */
            readonly Filter_applied_to_selected_se_notice_1: "Filter will be applied to the selected search engine and location. Before applying the filter, check search volume.";
            /** @constant */
            readonly Ranks_tracked_date: "Rankings checked";
            /** @constant */
            readonly Ranks_missing_in_serp: "Keyword not found in search results";
            /** @constant */
            readonly Filter_applied_to_selected_se_notice_2: "Filter will be applied to the selected search engine and location. Before applying the filter, check keyword rankings.";
            /** @constant */
            readonly Groups_will_sort_alpahbetically: "Groups will be sorted alphabetically";
            /** @constant */
            readonly Groups_will_sort_by_date: "Groups will be sorted by creation date";
            /** @constant */
            readonly Groups_without_keywords_will_delete: "All empty groups will be wiped!";
            /** @constant */
            readonly Groups_keywords_will_delete: "All groups and keywords will be wiped immediately. You can't undo this action.";
            /** @constant */
            readonly Inactive_groups_will_be_deleted: "All inactive groups will be wiped!";
            /** @constant */
            readonly Filters_bulk_actions: "Filters / Bulk operations";
            /** @constant */
            readonly Copy_group: "Export group";
            /** @constant */
            readonly to_project: "to the project";
            /** @constant */
            readonly Your_account: "You";
            /** @constant */
            readonly project_owner: "Project owner";
            /** @constant */
            readonly will_be_charged: "will be charged";
            /** @constant */
            readonly from_charged: "";
            /** @constant */
            readonly Suggestions_depth: "Nesting level";
            /** @constant */
            readonly Move_gathered_single_group: "Band up all collected keywords within a single group";
            /** @constant */
            readonly Search_uri: "Search a URI";
            /** @constant */
            readonly Add_to_group: "Add to group";
            /** @constant */
            readonly Integrate_to_use_the_tool_1: "To use the tool";
            /** @constant */
            readonly Integrate_to_use_the_tool_2: "integrate";
            /** @constant */
            readonly Integrate_to_use_the_tool_3: "your account with Google Analytics, Google Search Console or Yandex Metrica. <a href=\"/support/projects/integration/\" target=\"_blank\">How to integrate accounts →</a>";
            /** @constant */
            readonly Integrate_to_use_the_tool_3_without_yandex: "your account with Google Analytics, Google Search Console.<a href=\"/support/projects/integration/\" target=\"_blank\">How to integrate accounts →</a>";
            /** @constant */
            readonly Integrate_to_use_the_tool_aditional: "";
            /** @constant */
            readonly Methods_of_research: "Methods";
            /** @constant */
            readonly Popular: "Popular";
            /** @constant */
            readonly Other: "Other";
            /** @constant */
            readonly Clustering_in_process: "Clustering";
            /** @constant */
            readonly Clustering_type: "Clustering type";
            /** @constant */
            readonly Name_az: "Name A-Z";
            /** @constant */
            readonly Name_za: "Name Z-A";
            /** @constant */
            readonly Apply_to_selected: "Apply to selected keywords";
            /** @constant */
            readonly items_number: "keyword(s)";
            /** @constant */
            readonly Assign_target: "Assign target URL";
            /** @constant */
            readonly Landing_enter_URL: "Enter URL";
            /** @constant */
            readonly Reset: "Cancel";
            /** @constant */
            readonly Without_region: "Global";
            /** @constant */
            readonly Total_exact_ams: "Total search volume of a keyword group";
            /** @constant */
            readonly Total_exact_ams_of_project: "Total search volume of keywords in project";
            /** @constant */
            readonly Find_replace: "Find and replace";
            /** @constant */
            readonly Find_replace_target_links: "Find and replace target URLs";
            /** @constant */
            readonly Move_by_substrings: "Move keywords by substring";
            /** @constant */
            readonly Move_by_substrings_whole_words: "Whole words";
            /** @constant */
            readonly Move_by_substrings_info: "All keywords in which at least one of the specified substrings is found will be moved to the specified group. Example: When specifying the \"a\" substring, all keywords with the letter \"a\" will be moved.";
            /** @constant */
            readonly Filter_short: "F";
            /** @constant */
            readonly Tag: "Tag";
            /** @constant */
            readonly Change: "Change";
            /** @constant */
            readonly Find: "Find";
            /** @constant */
            readonly Replace: " Replace with";
            /** @constant */
            readonly Add_keyword_to_replace: "Add words or phrases to replace";
            /** @constant */
            readonly Keyword_will_be_replaced: "These words or phrases will be automatically replaced.";
            /** @constant */
            readonly Tetris_points: "Points";
            /** @constant */
            readonly Tetris_best_score: "Best score";
            /** @constant */
            readonly Tetris_game_over: "Game over";
            /** @constant */
            readonly Tetris_play_again: "Play again";
            /** @constant */
            readonly Hints_data_sources: "Sources";
            /** @constant */
            readonly CONTROLLER_Phrases_added: "You have successfully added keywords";
            /** @constant */
            readonly CONTROLLER_phrases_missed: "Skipped duplicate keywords";
            /** @constant */
            readonly CONTROLLER_phrases_moved: "Moved (changed) keywords";
            /** @constant */
            readonly CONTROLLER_Semantic_kernel: "Keywords";
            /** @constant */
            readonly Folder_max_depth: "Nested folder limit";
            /** @constant */
            readonly Choose_searcher: "Select search engine";
            /** @constant */
            readonly Choose_region: "Select location";
            /** @constant */
            readonly Choose_regions: "Select locations";
            /** @constant */
            readonly Choose_searcher_and_region: "Select search engine and location";
            /** @constant */
            readonly Choose_competitor: "Select competitor";
            /** @constant */
            readonly Choose_group: "Choose group";
            /** @constant */
            readonly Main_project: "My project";
            /** @constant */
            readonly Without_relevant_url: "No ranked URL";
            /** @constant */
            readonly Not_checked: "Not tracked";
            /** @constant */
            readonly Set_phrases_minus: "Exclude all phrases with negative keywords (Google and Yandex)";
            /** @constant */
            readonly Negative_words: "Negative keywords";
            /** @constant */
            readonly Group_id: "Group id";
            /** @constant */
            readonly Project_id: "Project id";
            /** @constant */
            readonly Keyword_id: "Keyword id";
            /** @constant */
            readonly Keyword_folder_id: "Keyword folder id";
            /** @constant */
            readonly Folder_path: "Folder";
            /** @constant */
            readonly Keyword_rank: "Keyword rank";
            /** @constant */
            readonly Keyword_count: "Keyword count";
            /** @constant */
            readonly Sorting_order: "Sorting order";
            /** @constant */
            readonly Keyword_clustering_completed: "Keyword clustering completed";
            /** @constant */
            readonly Send_to_email: "Send to Email";
            /** @constant */
            readonly Cluster_the_core_and_send_results_to_email: "Cluster the core and send results to email";
            /** @constant */
            readonly Data_will_be_pulled_for: "Collect data for";
            /** @constant */
            readonly total_count: "; total count";
            /** @constant */
            readonly Enter_keywords: "Enter keywords";
            /** @constant */
            readonly Upload_from_file: "Upload from file";
            /** @constant */
            readonly Selected: "Selected";
            /** @constant */
            readonly Keyword_export: "Keyword export";
            /** @constant */
            readonly Group_export: "Group export";
            /** @constant */
            readonly Copy_to_clipboard: "Copy to clipboard";
            /** @constant */
            readonly Copy_to_clipboard_up_to: "Copy to clipboard (up to %max% keywords)";
            /** @constant */
            readonly To_copy_and_move: "Copy and transfer";
            /** @constant */
            readonly To_delete_keywords_warning: "<b>Important!</b><br>Are you sure you want to delete selected keywords?";
            /** @constant */
            readonly To_delete_folder_warning: "<b>Important!</b><br><br>If you delete a folder, its contents (subfolders, groups, keywords) will be deleted immediately";
            /** @constant */
            readonly Restore_selected_keywords: "Restore selected keywords";
            /** @constant */
            readonly Restore_selected_folders: "Restore selected folders";
            /** @constant */
            readonly Restore_selected_groups_restores_contents: "If you restore the group, all folders and keywords in the group will be restored immediately";
            /** @constant */
            readonly Restore: "Restore";
            /** @constant */
            readonly or_drag_here: "or drag and drop here";
            /** @constant */
            readonly txt_csv_max_size: "(txt or csv - max 10 Mb)";
            /** @constant */
            readonly Drop_file: "Drop file";
            /** @constant */
            readonly File_uploaded: "File uploaded";
            /** @constant */
            readonly Disable_floating_bar: "Disable floating bar";
            /** @constant */
            readonly Temporary_bin: "Temporary bin";
            /** @constant */
            readonly Set_target_equals_relevant: "Assign Target = Ranked URL from the last check";
            /** @constant */
            readonly Import_target_links: "Import target links";
            /** @constant */
            readonly Total_selected: "Total selected keywords";
            /** @constant */
            readonly Keyword_length: "Keyword length";
            /** @constant */
            readonly XSLX_tabs: "XLSX (Tabs)";
            /** @constant */
            readonly Prepare: "Prepare";
            /** @constant */
            readonly Enter_name_of_new_group: "Enter a name of a new group";
            /** @constant */
            readonly Manage_columns: "Manage columns";
            /** @constant */
            readonly Max_period_one_year: "Max period - 1 year";
            /** @constant */
            readonly Target_equals_relevant_lastcheck_in_location: "Target = Ranked URL from the last check in the location";
            /** @constant */
            readonly Do_not_overwrite_assigned_target_links: "Do not overwrite assigned target links";
            /** @constant */
            readonly Sy_wordstat_max_pages: "MAX pages";
            /** @constant */
            readonly Research_status: "Keyword research status";
            /** @constant */
            readonly Activity_status: "Group activity status";
            /** @constant */
            readonly No_target_URL: "No Target URL";
            /** @constant */
            readonly Move_keywords_to_another_project: "Move to another project";
            /** @constant */
            readonly Move_group_and_delete_from_orginal_project: "Transfer (delete from the orginal project)";
            /** @constant */
            readonly Keywords_to_transfer_and_delete_from_project: "To transfer and delete from the original project";
            /** @constant */
            readonly Remove_pluses_fullstops_commas_apostrophes_quotes: "Remove plus symbols, full stops, commas, apostrophes, quotes";
            /** @constant */
            readonly HintVolumeNoCollected: "Volume isn't collected. Follow <a href=\"/ru/support/keywords/volume/\" target=\"_blank\">this manual</a> to collect volume.<br><br>\nFor some keywords search volume is displayed because we store volume in a common database without linking it to a particular user: if other users checked it, it would be automatically pulled from the database. But note that such volume could be outdated.";
            /** @constant */
            readonly Collect_settings: "Collect settings";
            /** @constant */
            readonly Collect_hint_methods: "Auto substitutions";
            /** @constant */
            readonly Extension_of_groups: "Groups expansion";
            /** @constant */
            readonly Extend_the_group: "Expand group";
            /** @constant */
            readonly Selected_groups_for_extension: "Groups selected for expansion";
            /** @constant */
            readonly Collect_type: "What to use for expansion";
            /** @constant */
            readonly Use_only_group_name: "Only group names";
            /** @constant */
            readonly Use_group_requests_only: "Only keywords in groups";
            /** @constant */
            readonly Use_group_name_and_queries: "Use both group names and keywords";
            /** @constant */
            readonly Cluster_core: "Cluster semantic core";
            /** @constant */
            readonly Cluster_by_the_highest_level: "Clustering will be done by the highest level.";
            /** @constant */
            readonly Wait_while_clustering: "We're enchanting your semantic core. Please wait a bit.";
            /** @constant */
            readonly Root_folder: "Root folder";
            /** @constant */
            readonly Groups_with_keywords: "Groups with keywords";
            /** @constant */
            readonly Type_of_volume_needed_for_visibility: "Check this type of Search Volume to calculate Visibility for";
            /** @constant */
            readonly keywords: "keywords";
            /** @constant */
            readonly No_keywords_found: "No keywords found";
            /** @constant */
            readonly Added_phrases: "Added keywords";
            /** @constant */
            readonly Changed_phrases: "Moved (changed) keywords";
            /** @constant */
            readonly Fitler_by_keywords_for_check: "Which keywords to check";
            /** @constant */
            readonly All_keywords: "All keywords";
            /** @constant */
            readonly Select_source: "Select source";
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
