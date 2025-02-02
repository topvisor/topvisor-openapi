/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "I18n.Keywords": {
            /** @default Average */
            readonly Average: string;
            /** @default Keyword not selected */
            readonly phrase_missed: string;
            /** @default Group not found in the project */
            readonly group_not_exists: string;
            /** @default Keyword not found in the project */
            readonly keyword_not_exists: string;
            /** @default Invalid keyword */
            readonly incorrect_phrase: string;
            /** @default This keyword already exists */
            readonly phrase_exists: string;
            /** @default The number of columns in some lines doesn't match the number in other lines. */
            readonly import_error_columns: string;
            /** @default  If you import keywords from a CSV file, please place all keywords with special characters (comma (,), semicolon (;)) in double quotation marks (") */
            readonly import_error_columns2: string;
            /** @default You haven't selected keywords to import */
            readonly import_error1: string;
            /** @default Add keyword */
            readonly Add_phrase: string;
            /** @default Add new group */
            readonly Add_group: string;
            /** @default New folder */
            readonly New_folder: string;
            /** @default New group */
            readonly New_group: string;
            /** @default Keyword not found or access denied */
            readonly Access_error: string;
            /** @default Group */
            readonly CSV_group: string;
            /** @default Keyword */
            readonly CSV_phrase: string;
            /** @default Ranked page */
            readonly CSV_rel: string;
            /** @default Snippet titles */
            readonly CSV_snippet_title: string;
            /** @default Snippet */
            readonly CSV_snippet: string;
            /** @default Target URL */
            readonly CSV_target: string;
            /** @default Traffic */
            readonly CSV_visits: string;
            /** @default Bid */
            readonly CSV_google_price: string;
            /** @default 1-st Premium placement */
            readonly CSV_yandex_price1: string;
            /** @default 2-st Premium placement */
            readonly CSV_yandex_price2: string;
            /** @default Premium placement */
            readonly CSV_yandex_price3: string;
            /** @default 1st place */
            readonly CSV_yandex_price4: string;
            /** @default Guaranteed */
            readonly CSV_yandex_price5: string;
            /** @default Target URLs not changed */
            readonly Targets_error: string;
            /** @default You can't edit this group! */
            readonly Group_changing_denied: string;
            /** @default Filtered group */
            readonly Filtered_group: string;
            /** @default Project export for */
            readonly Export_dynamics_by_date: string;
            /** @default Cannot prepare export. There are not enough funds in your account. */
            readonly Export_Balance_notify: string;
            /** @default html comparison is not available yet */
            readonly Export_HTML_comparison_not_available: string;
            /** @default Unsubscribe  */
            readonly Reports_unsubscribing1: string;
            /** @default from project reports */
            readonly Reports_unsubscribing2: string;
            /** @default Project report for */
            readonly Project_report: string;
            /** @default dated */
            readonly project_report_msg: string;
            /** @default The project is not active. You can recover it in the projects list */
            readonly project_has_archived: string;
            /** @default there are not enough funds in your account to track keyword rankings */
            readonly Not_enough_balance_for_check_position: string;
            /** @default Top up balance */
            readonly Refill_balance: string;
            /** @default The project owner has insufficient funds to complete the task. Contact the owner of the project  */
            readonly Not_enough_owner_balance: string;
            /** @default  and ask them to top up their balance. */
            readonly Not_enough_owner_balance2: string;
            /** @default You used up the limit on checks the project's owner gave you. Contact the owner via  */
            readonly Not_enough_balance_limit: string;
            /** @default  if you need to raise the limit */
            readonly Not_enough_balance_limit2: string;
            /** @default Keyword rank check of */
            readonly Position_check: string;
            /** @default Track ranks and collect snippets */
            readonly Position_check_with_snippet: string;
            /** @default Keyword ranking report for */
            readonly Positions_check: string;
            /** @default Add search engines in project settings */
            readonly Positions_select_se: string;
            /** @default Keyword ranking and snippets report for */
            readonly Positions_check_with_snippets: string;
            /** @default Keyword ranking already started */
            readonly Keyword_ranking_already_started: string;
            /** @default You do not have enough funds in your account to track keyword rankings */
            readonly Not_enough_balance_for_check_positions: string;
            /** @default Keywords are too short */
            readonly Short_keywords: string;
            /** @default Keyword research */
            readonly Semantic_kernel_composition: string;
            /** @default Keyword suggestions harvest */
            readonly Semantic_kernel_composition_by_hints: string;
            /** @default `Provider` is incorrect */
            readonly Provider_incorrect: string;
            /** @default There are not enough funds in your account */
            readonly Not_enough_balance: string;
            /** @default Skipped search volume data in project */
            readonly Unchecked_wordstat_is_missing1: string;
            /** @default for applied locations and search volume types there's no */
            readonly Unchecked_wordstat_is_missing2: string;
            /** @default The project has */
            readonly No_phrases_or_regions1: string;
            /** @default no keywords or locations and search volume types are not selected */
            readonly No_phrases_or_regions2: string;
            /** @default Search volume tracking for: */
            readonly Wordstat_check: string;
            /** @default research depth */
            readonly depth: string;
            /** @default Assigning project tasks.<br>Clustering tool will be available within a minute */
            readonly Claster_delay: string;
            /** @default Keyword clustering */
            readonly Claster_task_bank: string;
            /** @default Re-calculate clustering cost */
            readonly Claster_task_change_bank: string;
            /** @default Clustering is in process */
            readonly Claster_already_doing: string;
            /** @default Previous keyword clustering results not found */
            readonly Claster_not_exists_last_results: string;
            /** @default to each keyword */
            readonly for_keyword: string;
            /** @default Get group search volume */
            readonly Get_group_search_volume: string;
            /** @default Export from group */
            readonly Export_group: string;
            /** @default Copy to another project */
            readonly Export_to_project: string;
            /** @default Move to another project */
            readonly Move_to_project: string;
            /** @default Block mode is not available if you have over 6 000 keywords or too many groups */
            readonly Block_mode_unavailable_notice: string;
            /** @default Block mode */
            readonly Block_mode: string;
            /** @default Table mode */
            readonly Table_mode: string;
            /** @default Tag No. */
            readonly Tags: string;
            /** @default Tags */
            readonly Tags_names: string;
            /** @default Disable */
            readonly Tags_disable: string;
            /** @default Add tag */
            readonly Set_tag: string;
            /** @default Remove tags */
            readonly Remove_tag: string;
            /** @default Add tags */
            readonly Add_tags: string;
            /** @default Remove tags */
            readonly Remove_tags: string;
            /** @default Replace tags */
            readonly Set_tags: string;
            /** @default Keyword import */
            readonly Import: string;
            /** @default Keyword export */
            readonly Export: string;
            /** @default Target URL */
            readonly Target: string;
            /** @default Target URL status */
            readonly Target_status: string;
            /** @default Ranked URL */
            readonly Relevant_page: string;
            /** @default CPC */
            readonly CPC: string;
            /** @default Traffic */
            readonly Visits: string;
            /** @default Snippet */
            readonly Snippet: string;
            /** @default Research keywords */
            readonly Research: string;
            /** @default Collect keyword suggestions */
            readonly Research_suggestions: string;
            /** @default Research keywords */
            readonly Research_keywords_se: string;
            /** @default Magnet tool */
            readonly Research_keywords_traffic: string;
            /** @default Research */
            readonly To_research: string;
            /** @default Groups */
            readonly Group_number: string;
            /** @default Keywords */
            readonly Keyword_number: string;
            /** @default On */
            readonly Turn_on: string;
            /** @default Off */
            readonly Turn_off: string;
            /** @default Turn on all groups */
            readonly Enable_all_groups: string;
            /** @default Turn off all groups */
            readonly Disable_all_groups: string;
            /** @default Select all */
            readonly Select_all: string;
            /** @default Select groups */
            readonly Select_groups: string;
            /** @default Select */
            readonly Highlight: string;
            /** @default Trash bin */
            readonly Trash_bin: string;
            /** @default Filter */
            readonly Filter: string;
            /** @default Search keyword */
            readonly Search_keyword: string;
            /** @default Get search volume */
            readonly Get_search_volume: string;
            /** @default Keyword clustering */
            readonly Clustering_tool: string;
            /** @default Search engine / Location */
            readonly SE_location: string;
            /** @default Select location */
            readonly Select_location: string;
            /** @default Select another location */
            readonly Select_another_location: string;
            /** @default Clustering level */
            readonly Clustering_level: string;
            /** @default Higher level clustering produces more groups with fewer keywords in every group. */
            readonly Clustering_level_groups_relation: string;
            /** @default <b>Important!</b><br>Keyword clustering changes groups and keyword order in your project.<br> After clustering, keyword groups will be automatically disabled. */
            readonly Clustering_changes_order_notice: string;
            /** @default Before grouping keywords by page relevance, make sure that you have checked<br> keyword rankings in the applied search engine and location. */
            readonly Clustering_rel_notice: string;
            /** @default Clustering */
            readonly Cluster: string;
            /** @default Keyword clustering by TOP10 */
            readonly Cluster_TOP10: string;
            /** @default Grouping by page relevance */
            readonly Cluster_relevant_url: string;
            /** @default Grouping by target URLs */
            readonly Cluster_target_url: string;
            /** @default Before grouping, make sure that target URLs are assigned */
            readonly Before_grouping_setup_target_urls: string;
            /** @default Change clustering level */
            readonly Change_clustering_level: string;
            /** @default Bounce */
            readonly Bounce_rate: string;
            /** @default Pages */
            readonly Pages_view: string;
            /** @default Time */
            readonly Time: string;
            /** @default Delete group */
            readonly Del_group: string;
            /** @default Sort keywords */
            readonly Sort_keywords: string;
            /** @default Filter keywords */
            readonly Filter_phrases: string;
            /** @default Enable / Disable a group */
            readonly On_Off_group: string;
            /** @default Move to a new group */
            readonly Move_to_new_group: string;
            /** @default <b>Important!</b><br>If you delete a group, all keywords in the group will be deleted immediately. */
            readonly Delete_group_warning: string;
            /** @default Keywords (each keyword on a new line) */
            readonly Each_keyword_on_new_line: string;
            /** @default Source */
            readonly Source: string;
            /** @default Phrases (each one on a new line) */
            readonly Phrases_on_new_line: string;
            /** @default Import into group */
            readonly Import_to_group: string;
            /** @default Skip duplicates */
            readonly Skip_duplicates: string;
            /** @default Move duplicates */
            readonly Move_duplicates: string;
            /** @default Move duplicates to another group */
            readonly Move_duplicates_another_group: string;
            /** @default Where move duplicates? */
            readonly Move_duplicates_another_group_name: string;
            /** @default Match type */
            readonly Match_type: string;
            /** @default Volume */
            readonly Match_type_broad: string;
            /** @default Volume */
            readonly Match_type_phrase: string;
            /** @default Volume */
            readonly Match_type_exact: string;
            /** @default Strict */
            readonly Match_type_strict: string;
            /** @default For locations */
            readonly By_location: string;
            /** @default Skip collected search volume data */
            readonly Skip_tracked_searches: string;
            /** @default Check active groups only */
            readonly Check_active_groups_only: string;
            /** @default By search volume */
            readonly By_total_searches: string;
            /** @default By keyword rank (applied SE and Location) */
            readonly By_rank: string;
            /** @default Sort groups by total search volume */
            readonly Sort_groups_by_searches: string;
            /** @default Sort keywords in groups by search volume */
            readonly Sort_keywords_by_searches: string;
            /** @default Sort groups alphabetically */
            readonly Sort_groups_alphabetically: string;
            /** @default Sort groups by creation date */
            readonly Sort_groups_by_date: string;
            /** @default Delete empty groups */
            readonly Delete_empty_groups: string;
            /** @default Delete inactive groups */
            readonly Delete_inactive_groups: string;
            /** @default Wipe all groups and keywords */
            readonly Delete_groups_keywords: string;
            /** @default Add color tag */
            readonly Set_color_tag: string;
            /** @default Group name */
            readonly Group_name: string;
            /** @default Move to the group */
            readonly move_to: string;
            /** @default Filter will be applied to the selected search engine and location. Before applying the filter, check search volume. */
            readonly Filter_applied_to_selected_se_notice_1: string;
            /** @default Rankings checked */
            readonly Ranks_tracked_date: string;
            /** @default Keyword not found in search results */
            readonly Ranks_missing_in_serp: string;
            /** @default Filter will be applied to the selected search engine and location. Before applying the filter, check keyword rankings. */
            readonly Filter_applied_to_selected_se_notice_2: string;
            /** @default Groups will be sorted alphabetically */
            readonly Groups_will_sort_alpahbetically: string;
            /** @default Groups will be sorted by creation date */
            readonly Groups_will_sort_by_date: string;
            /** @default All empty groups will be wiped! */
            readonly Groups_without_keywords_will_delete: string;
            /** @default All groups and keywords will be wiped immediately. You can't undo this action. */
            readonly Groups_keywords_will_delete: string;
            /** @default All inactive groups will be wiped! */
            readonly Inactive_groups_will_be_deleted: string;
            /** @default Filters / Bulk operations */
            readonly Filters_bulk_actions: string;
            /** @default Export group */
            readonly Copy_group: string;
            /** @default to the project */
            readonly to_project: string;
            /** @default You */
            readonly Your_account: string;
            /** @default Project owner */
            readonly project_owner: string;
            /** @default will be charged */
            readonly will_be_charged: string;
            readonly from_charged: string;
            /** @default Nesting level */
            readonly Suggestions_depth: string;
            /** @default Band up all collected keywords within a single group */
            readonly Move_gathered_single_group: string;
            /** @default Search a URI */
            readonly Search_uri: string;
            /** @default Add to group */
            readonly Add_to_group: string;
            /** @default To use the tool */
            readonly Integrate_to_use_the_tool_1: string;
            /** @default integrate */
            readonly Integrate_to_use_the_tool_2: string;
            /** @default your account with Google Analytics, Google Search Console or Yandex Metrica */
            readonly Integrate_to_use_the_tool_3: string;
            /** @default Methods */
            readonly Methods_of_research: string;
            /** @default Popular */
            readonly Popular: string;
            /** @default Other */
            readonly Other: string;
            /** @default Clustering */
            readonly Clustering_in_process: string;
            /** @default Clustering type */
            readonly Clustering_type: string;
            /** @default Name A-Z */
            readonly Name_az: string;
            /** @default Name Z-A */
            readonly Name_za: string;
            /** @default Apply to selected keywords */
            readonly Apply_to_selected: string;
            /** @default keyword(s) */
            readonly items_number: string;
            /** @default Assign target URL */
            readonly Assign_target: string;
            /** @default Enter URL */
            readonly Landing_enter_URL: string;
            /** @default Cancel */
            readonly Reset: string;
            /** @default Global */
            readonly Without_region: string;
            /** @default Total search volume of a keyword group */
            readonly Total_exact_ams: string;
            /** @default Total search volume of keywords in project */
            readonly Total_exact_ams_of_project: string;
            /** @default Find and replace */
            readonly Find_replace: string;
            /** @default Find and replace target URLs */
            readonly Find_replace_target_links: string;
            /** @default Move keywords by substring */
            readonly Move_by_substrings: string;
            /** @default Whole words */
            readonly Move_by_substrings_whole_words: string;
            /** @default All keywords in which at least one of the specified substrings is found will be moved to the specified group. Example: When specifying the "a" substring, all keywords with the letter "a" will be moved. */
            readonly Move_by_substrings_info: string;
            /** @default F */
            readonly Filter_short: string;
            /** @default Tag */
            readonly Tag: string;
            /** @default Change */
            readonly Change: string;
            /** @default Find */
            readonly Find: string;
            /** @default  Replace with */
            readonly Replace: string;
            /** @default Add words or phrases to replace */
            readonly Add_keyword_to_replace: string;
            /** @default These words or phrases will be automatically replaced. */
            readonly Keyword_will_be_replaced: string;
            /** @default Points */
            readonly Tetris_points: string;
            /** @default Best score */
            readonly Tetris_best_score: string;
            /** @default Game over */
            readonly Tetris_game_over: string;
            /** @default Play again */
            readonly Tetris_play_again: string;
            /** @default Sources */
            readonly Hints_data_sources: string;
            /** @default You have successfully added keywords */
            readonly CONTROLLER_Phrases_added: string;
            /** @default skipped duplicate keywords */
            readonly CONTROLLER_phrases_missed: string;
            /** @default moved (changed) keywords */
            readonly CONTROLLER_phrases_moved: string;
            /** @default Keywords */
            readonly CONTROLLER_Semantic_kernel: string;
            /** @default Nested folder limit */
            readonly Folder_max_depth: string;
            /** @default Select search engine */
            readonly Choose_searcher: string;
            /** @default Select location */
            readonly Choose_region: string;
            /** @default Select locations */
            readonly Choose_regions: string;
            /** @default Select search engine and location */
            readonly Choose_searcher_and_region: string;
            /** @default Select competitor */
            readonly Choose_competitor: string;
            /** @default Choose group */
            readonly Choose_group: string;
            /** @default My project */
            readonly Main_project: string;
            /** @default No ranked URL */
            readonly Without_relevant_url: string;
            /** @default Not tracked */
            readonly Not_checked: string;
            /** @default Exclude all phrases with negative keywords (Google and Yandex) */
            readonly Set_phrases_minus: string;
            /** @default Negative keywords */
            readonly Negative_words: string;
            /** @default Update expired search volume */
            readonly Check_old_searches: string;
            /** @default Group id */
            readonly Group_id: string;
            /** @default Project id */
            readonly Project_id: string;
            /** @default Keyword id */
            readonly Keyword_id: string;
            /** @default Keyword folder id */
            readonly Keyword_folder_id: string;
            /** @default Folder */
            readonly Folder_path: string;
            /** @default Keyword rank */
            readonly Keyword_rank: string;
            /** @default Keyword count */
            readonly Keyword_count: string;
            /** @default Sorting order */
            readonly Sorting_order: string;
            /** @default Keyword clustering completed */
            readonly Keyword_clustering_completed: string;
            /** @default Send to Email */
            readonly Send_to_email: string;
            /** @default Collect data for */
            readonly Data_will_be_pulled_for: string;
            /** @default ; total count */
            readonly total_count: string;
            /** @default Enter keywords */
            readonly Enter_keywords: string;
            /** @default Upload from file */
            readonly Upload_from_file: string;
            /** @default Selected */
            readonly Selected: string;
            /** @default Keyword export */
            readonly Keyword_export: string;
            /** @default Group export */
            readonly Group_export: string;
            /** @default Copy to clipboard */
            readonly Copy_to_clipboard: string;
            /** @default Copy to clipboard (up to %max% keywords) */
            readonly Copy_to_clipboard_up_to: string;
            /** @default Copy and transfer */
            readonly To_copy_and_move: string;
            /** @default <b>Important!</b><br>Are you sure you want to delete selected keywords? */
            readonly To_delete_keywords_warning: string;
            /** @default <b>Important!</b><br><br>If you delete a folder, its contents (subfolders, groups, keywords) will be deleted immediately */
            readonly To_delete_folder_warning: string;
            /** @default Restore selected keywords */
            readonly Restore_selected_keywords: string;
            /** @default Restore selected folders */
            readonly Restore_selected_folders: string;
            /** @default If you restore the group, all folders and keywords in the group will be restored immediately */
            readonly Restore_selected_groups_restores_contents: string;
            /** @default Restore */
            readonly Restore: string;
            /** @default or drag and drop here */
            readonly or_drag_here: string;
            /** @default (txt or csv - max 10 Mb) */
            readonly txt_csv_max_size: string;
            /** @default Drop file */
            readonly Drop_file: string;
            /** @default File uploaded */
            readonly File_uploaded: string;
            /** @default Disable floating bar */
            readonly Disable_floating_bar: string;
            /** @default Temporary bin */
            readonly Temporary_bin: string;
            /** @default Assign Target = Ranked URL from the last check */
            readonly Set_target_equals_relevant: string;
            /** @default Import target links */
            readonly Import_target_links: string;
            /** @default Total selected keywords */
            readonly Total_selected: string;
            /** @default Keyword length */
            readonly Keyword_length: string;
            /** @default XLSX (Tabs) */
            readonly XSLX_tabs: string;
            /** @default Prepare */
            readonly Prepare: string;
            /** @default Enter a name of a new group */
            readonly Enter_name_of_new_group: string;
            /** @default Manage columns */
            readonly Manage_columns: string;
            /** @default Max period - 1 year */
            readonly Max_period_one_year: string;
            /** @default Target = Ranked URL from the last check in the location */
            readonly Target_equals_relevant_lastcheck_in_location: string;
            /** @default Do not overwrite assigned target links */
            readonly Do_not_overwrite_assigned_target_links: string;
            /** @default Количество страниц (макс.) */
            readonly Sy_wordstat_max_pages: string;
            /** @default Keyword research status */
            readonly Research_status: string;
            /** @default Group activity status */
            readonly Activity_status: string;
            /** @default No Target URL */
            readonly No_target_URL: string;
            /** @default Move to another project */
            readonly Move_keywords_to_another_project: string;
            /** @default Transfer (delete from the orginal project) */
            readonly Move_group_and_delete_from_orginal_project: string;
            /** @default To transfer and delete from the original project */
            readonly Keywords_to_transfer_and_delete_from_project: string;
            /** @default Remove plus symbols, full stops, commas, apostrophes, quotes */
            readonly Remove_pluses_fullstops_commas_apostrophes_quotes: string;
            /** @default Volume isn't collected. Follow <a href="/ru/support/keywords/volume/" target="_blank">this manual</a> to collect volume.<br><br>
             *     For some keywords search volume is displayed because we store volume in a common database without linking it to a particular user: if other users checked it, it would be automatically pulled from the database. But note that such volume could be outdated. */
            readonly HintVolumeNoCollected: string;
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
