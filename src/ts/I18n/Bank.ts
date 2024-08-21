/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "I18n.Bank": {
            /** @constant */
            Plus?: "Credit";
            /** @constant */
            Minus?: "Expenses";
            /** @constant */
            Payment?: "Payment";
            /** @constant */
            Incorrect_sum?: "Incorrect sum!";
            /** @constant */
            Not_enough_balance?: "Insufficient balance in your account!";
            /** @constant */
            Bonus_refill?: "Bonus for balance top-up";
            /** @constant */
            Mail_address?: "Address";
            /** @constant */
            Basis1?: "Certificates";
            /** @constant */
            Basis2?: "Powers of attorney";
            /** @constant */
            Basis3?: "Management contract";
            /** @constant */
            Ref_action?: "Transaction from the affiliate account to the system account";
            /** @constant */
            bonuses?: "bonus";
            /** @constant */
            public_offer?: "public offer";
            /** @constant */
            by_public_offer?: "under public offer";
            /** @constant */
            dogovor?: "contract";
            /** @constant */
            by_dogovor?: "under agreement";
            /** @constant */
            Info_system_withdrawal?: "Withdrawal to system account";
            /** @constant */
            Refund_by_invoice?: "Refund by invoice";
            /** @constant */
            Return_to_payment?: "Back to payment methods";
            /** @constant */
            Payment_processed?: "Your payment has been processed successfully. <br> Thank you for choosing our tools";
            /** @constant */
            Payment_unsuccessful?: "Sorry, payment failed.<br>Please, try another payment method or contact Customer Support.";
            /** @constant */
            Bonuses?: "Bonus account";
            /** @constant */
            Comment?: "Description";
            /** @constant */
            Operation?: "Operation";
            /** @constant */
            Pay?: "Pay";
            /** @constant */
            Total_to_pay?: "Total";
            /** @constant */
            Referral_link?: "Affiliate link";
            /** @constant */
            Your_referrals?: "Referrals";
            /** @constant */
            Referrals_registered?: "Registered";
            /** @constant */
            Referrals_turnover?: "Turnover";
            /** @constant */
            Referrals_last_payment?: "Last payment";
            /** @constant */
            Income?: "Income";
            /** @constant */
            Set_period?: "Select period";
            /** @constant */
            Referrals_bonus?: "We have a bonus for you!";
            /** @constant */
            Referrals_bonus_info?: "We'll gift social media referrals extra 200 free ranking updates!";
            /** @constant */
            Share?: "Share";
            /** @constant */
            Referrals_attach_email?: "This address will be linked to your account as an affiliate address";
            /** @constant */
            Referrals_share?: "Share on social media";
            /** @constant */
            Referrals_send_email_invite?: "Send invitation";
            /** @constant */
            Referrals_invitation_sent?: "We have sent invitation email to";
            /** @constant */
            Referrals_stats?: "Stats";
            /** @constant */
            Referrals_level?: "Referee level";
            /** @constant */
            Referrals_you_earned?: "You earned";
            /** @constant */
            Referrals_withdraw_to_balance?: "To balance";
            /** @constant */
            Referrals_withdraw?: "Withdraw";
            /** @constant */
            Referrals_transfer?: "Transfer";
            /** @constant */
            Referrals_confirm_funds_transfer_to_bonus_account_notice?: "Your earnings will be transferred to the bonus balance, you will not be able to withdraw it later.<br><br>\n\tDo you want to continue?";
            /** @constant */
            Referrals_levels_description_title?: "Referrals get levels that depend on the total amount paid. There are no limits on Referrals' levels or\n\tthe reward amount a Partner can get. But the reward accrues only during two years after Referral registration date.<br><br>\n\tA Partner gets a reward each time a Referral reaches a new level on the Affiliate program. A reward is 100 rubles for the 1st\n\tlevel and 10% of the new payments by a Referral for the next levels.";
            /** @constant */
            Referrals_download_invoice_act?: "Download invoice and act";
            /** @constant */
            Referrals_withdrawal_available_from_amount_notice?: "You can withdraw the amount from 5 000 rubles";
            /** @constant */
            Referrals_link_to_EDF_setup_instruction?: "What is EDF, how can I use it?";
            /** @constant */
            Referrals_visits?: "Visits";
            /** @constant */
            Referrals_registrations?: "Registrations";
            /** @constant */
            Referrals_partner_bank_details?: "Affiliate program member bank details";
            /** @constant */
            Referrals_invitation_from?: "Invitation from";
            /** @constant */
            Referrals_transfer_from_referral_to_bonus_balance?: "Transfer from referral balance to bonus balance";
            /** @constant */
            First_referral_email_title?: "You got your first referral!";
            /** @constant */
            New_referral_email_title?: "You already have %count_referrals% referrals. Keep it up! 🎉";
            /** @constant */
            Referrals_award_email_title?: "You received a reward! Your referral reached a new level 🔥";
            /** @constant */
            Referrals_total_amount_earned_email_title?: "As our partner, you have already earned %total_balance_ref% rubles. Keep it up! ?";
            /** @constant */
            Account_plan?: "Account (Pricing plan)";
            /** @constant */
            Plan_discount?: "YOU SAVE";
            /** @constant */
            discount?: "you save";
            /** @constant */
            Discount?: "You save";
            /** @constant */
            plan_month?: "per month";
            /** @constant */
            Remove_card?: "Remove card";
            /** @constant */
            Cancel_subscription?: "Cancel subscription";
            /** @constant */
            Link_card?: "Save";
            /** @constant */
            Removed_card_notice?: "Your credit card is removed. You can add a credit card again at the end of the current billing period.";
            /** @constant */
            plan_payment?: "pricing plan subscription fee";
            /** @constant */
            Extending_plan_failed?: "Subscription failed to renew";
            /** @constant */
            Extending_plan_notice?: "To restart your subscription ";
            /** @constant */
            Tariff_choose_plan?: "Choose a plan that works for you and save up to ";
            /** @constant */
            Tariff_next_plan?: "Next plan";
            /** @constant */
            Tariff_text?: "Pricing Plan discount is valid until the end of the billing period.\nIf unsubscribed, the discount is saved and corresponds to the selected Pricing Plan. The billing period is 1 calendar month.<br><br>\nYou can select another payment method after unsubscribing from the Pricing Plan and at the end of the billing period of the Pricing Plan.";
            /** @constant */
            Billing_operations?: "Billing operations";
            /** @constant */
            Service_tracking?: "Rank tracker tool";
            /** @constant */
            Service_researcher?: "Keyword research tool";
            /** @constant */
            Service_suggestions_tool?: "Search suggestions tool";
            /** @constant */
            Service_AMS_tracker?: "Search volume tool";
            /** @constant */
            Service_clustering?: "Keyword clustering tool";
            /** @constant */
            Service_auditor?: "SEO audit tool";
            /** @constant */
            Service_auditor_hold?: "SEO audit tool (hold)";
            /** @constant */
            Service_watcher?: "Website watcher";
            /** @constant */
            Service_index_checker?: "Index checker tool";
            /** @constant */
            Service_sitemap?: "Sitemap generator";
            /** @constant */
            Service_broker?: "Bid manager<br>/1000 adjustments";
            /** @constant */
            Service_bid_manager?: "Bid manager";
            /** @constant */
            Service_domain_registration?: "Domain registration";
            /** @constant */
            Service_web_screens?: "Web screenshots";
            /** @constant */
            Service_domain_renewal?: "Domain renewal";
            /** @constant */
            Service_payments_no_type?: "Payments of no type";
            /** @constant */
            Service_export?: "Projects export";
            /** @constant */
            Service_registrar_services?: "Registrar services";
            /** @constant */
            Service_competitors?: "Competitor research";
            /** @constant */
            Inform_choose_plan?: "You can choose the right plan straight away after ";
            /** @constant */
            register?: "signup";
            /** @constant */
            Move_to_plan?: "Choose the right plan for your business on ";
            /** @constant */
            bank_page?: "billing page";
            /** @constant */
            inform_updates_per_month?: " rank updates per month";
            /** @constant */
            Not_enough_personal_balance?: "There are insufficient funds in the personal account!";
            /** @constant */
            Tariff_balance_activation?: "Pricing plan fee";
            /** @constant */
            Prepaid_months?: "Prepaid months (including current)";
            /** @constant */
            paid_earlier?: "paid earlier";
            /** @constant */
            pricing_plan?: "pricing plan";
            /** @constant */
            Insufficient_balance_to_extend_plan?: "Not enough funds to renew subscription";
            /** @constant */
            Russian_ruble?: "Russian ruble";
            /** @constant */
            US_dollar?: "US dollar";
            /** @constant */
            You_can_select_change_currency_once_before_first_payment_notice?: "Currency can be selected and changed only once before the first payment";
            /** @constant */
            Payments_willbe_made_in_currency?: "Payments will be accepted in the following currency";
            /** @constant */
            Name_payment_log?: "Credit%systemType% - Payment TV-%paymentId% via \"%systemName%\"%contractInfo%";
            /** @constant */
            Name_payment_log_tariff?: "1-Month Subscription %tariffName% - plan - Payment TV-%paymentId% via \"%systemName%\"%contractInfo%";
            /** @constant */
            System_name_balance?: "Payment from account balance";
            /** @constant */
            System_name_card?: "Credit card payment";
            /** @constant */
            System_name_invoice?: "Wire transfer";
            /** @constant */
            System_name_tinkoff_business?: "Wire transfer (T-Business)";
            /** @constant */
            System_name_card_ap?: "Apple Pay";
            /** @constant */
            System_name_card_gp?: "Google Pay";
            /** @constant */
            System_name_card_ios?: "iOS";
            /** @constant */
            System_name_card_android?: "Android";
            /** @constant */
            System_name_wm2?: "WebMoney";
            /** @constant */
            System_name_pp?: "PayPal";
            /** @constant */
            System_name_ym?: "YooMoney";
            /** @constant */
            System_name_rk?: "Robokassa (cards of non-Russian banks, Belorussian in particular)";
            /** @constant */
            System_name_qw?: "QIWI";
            /** @constant */
            System_name_pd?: "Paddle";
            /** @constant */
            System_name_pd_invoice?: "Paddle invoice";
            /** @constant */
            System_name_sb?: "SberPay";
            /** @constant */
            Your_contract_expires_notice?: "Contract expiration notice";
            /** @constant */
            Earlier_contacts_closed_notice?: "Your earlier contract has been closed";
            /** @constant */
            Tinkoff_bank_details?: "TBank, Moscow";
            /** @constant */
            Contragent_message?: "Dear valued counterparty!\nOur company started using electronic document workflow system. We can issue and receive invoices, acts and receipts,\nkeep all documents and correspondence in the e-format without issuing paper duplicates.\nIf you would like to receive your documents in e-format via the electronic document workflow system, accept this invitation.\nBest regards, Denis Pustovoit";
            /** @constant */
            for_1_month_on_pricing_plan?: "for 1 month on the pricing plan";
            /** @constant */
            TV?: "TV-";
            /** @constant */
            Mentioned_services_completed_in_full_notice?: "The services mentioned above have been completed in full and on time. The customer does not have any concerns regarding volume, quality, and delivery timing.";
            /** @constant */
            Offer?: "Offer";
            /** @constant */
            Contract_offer?: "Contract offer";
            /** @constant */
            Contract?: "Agreement";
            /** @constant */
            Add_payment_details?: "Add payment details";
            /** @constant */
            Natural_person?: "Individual";
            /** @constant */
            Legal_person?: "Company";
            /** @constant */
            Sole_proprietor?: "Sole proprietor";
            /** @constant */
            Sole_proprietor_short?: "SP";
            /** @constant */
            Status?: "Status";
            /** @constant */
            Unconfirmed?: "Pending / Unconfirmed";
            /** @constant */
            Pause?: "Received (paused)";
            /** @constant */
            Confirmed?: "Completed";
            /** @constant */
            Pending_payment?: "Pending payment";
            /** @constant */
            Paid_and_postponed?: "Pre-paid and postponed";
            /** @constant */
            Service_acceptance_act?: "Service acceptance act";
            /** @constant */
            Payment_confirmed?: "Payment confirmed";
            /** @constant */
            Payment_prepaid?: "Payment prepaid";
            /** @constant */
            Payment_canceled?: "Payment canceled";
            /** @constant */
            Payment_refunded?: "Payment refunded";
            /** @constant */
            Make_invoice?: "Create invoice";
            /** @constant */
            Get_payment_invoice?: "Get invoice";
            /** @constant */
            Card_payment?: "Card payment";
            /** @constant */
            Pay_with_card_processing_time_15min?: "Pay with card. Processing time: 15 minutes.";
            /** @constant */
            Project_id?: "Project ID";
            /** @constant */
            Project_info?: "Project info";
            /** @constant */
            Automatic_top_up?: "Auto top-up";
            /** @constant */
            Account_automatic_top_up?: "Balance auto top-up";
            /** @constant */
            When_current_balance_reaches?: "When balance is below";
            /** @constant */
            Top_up_balance_with?: "Top up balance by";
            /** @constant */
            Domain_account_topup?: "Top up domain account";
            /** @constant */
            Amount_from?: "Minimum amount";
            /** @constant */
            Subscribe_for_period?: "Subscribe for";
            /** @constant */
            Invoice_for?: "Invoice for";
            /** @constant */
            you_need_to_select_plan?: "select a plan above";
            /** @constant */
            Subscribe_to_plan?: "Subscribe to plan";
            /** @constant */
            Change_plan?: "Change plan";
            /** @constant */
            Payment_status?: "Payment status";
            /** @constant */
            Individual_no_banking_details?: "Individual";
            /** @constant */
            Add_banking_details?: "Add company details";
            /** @constant */
            Add_admin?: "Add administrator";
            /** @constant */
            Edit_company_agreement?: "Edit agreement";
            /** @constant */
            Edit_admin_card?: "Edit administrator card";
            /** @constant */
            Save_bank_details?: "Save bank details";
            /** @constant */
            for_1_month?: "for 1 month";
            /** @constant */
            active?: "active";
            /** @constant */
            Cancel_pricing_plan_subscription?: "Cancel subscription";
            /** @constant */
            Invoice_created_successfully?: "Invoice created successfully";
            /** @constant */
            Proceed_to_bank_account_to_sign_order?: "Proceed to TBank account to sign a payment order";
            /** @constant */
            Estimated_processing_time?: "Estimated processing time is 5 minutes";
            /** @constant */
            Topup_amount?: "Topup amount";
            /** @constant */
            Topup_balance?: "Top up balance";
            /** @constant */
            Next_plan_payment?: "Next payment";
            /** @constant */
            in_the_amount?: "of";
            /** @constant */
            View_payment_warrants?: "View payment warrants on the";
            /** @constant */
            New_card?: "New card";
            /** @constant */
            card?: "card";
            /** @constant */
            Tinkoff_business_e_account?: "T-Business (e-account)";
            /** @constant */
            Get_invoice_via_Diadoc?: "Get invoice via e-doc";
            /** @constant */
            Register_in_Tinkoff_business?: "Create a T-Business account";
            /** @constant */
            Best_option?: "Best choice";
            /** @constant */
            Get_receipt_to_email?: "Get receipt to Email";
            /** @constant */
            Company_name?: "Company name";
            /** @constant */
            Company_address?: "Company address";
            /** @constant */
            Country_of_residence?: "Country of residence";
            /** @constant */
            Organization_name?: "Company name";
            /** @constant */
            Organization_english_name?: "Company name in English";
            /** @constant */
            OKPO?: "OKPO";
            /** @constant */
            Checking_account?: "Checking account";
            /** @constant */
            BIC?: "BIC";
            /** @constant */
            Bank_BIC?: "BIC of bank";
            /** @constant */
            Name_of_bank?: "Name of bank";
            /** @constant */
            Name_of_bank_short?: "Name";
            /** @constant */
            for_public_companies_and_monopolies?: "for public companies and natural monopolies";
            /** @constant */
            Legal_address?: "Legal address";
            /** @constant */
            Postal_address?: "Postal address";
            /** @constant */
            Postal_code?: "Postal code / Zip code";
            /** @constant */
            City?: "City";
            /** @constant */
            Region?: "State / Province";
            /** @constant */
            Correspondent_bank_details?: "Correspondent bank details";
            /** @constant */
            corr_acc?: "Bank corr. acc.";
            /** @constant */
            corr_acc_short?: "corr. acc.";
            /** @constant */
            IIC?: "IIC";
            /** @constant */
            MFO?: "MFO";
            /** @constant */
            Signatory_full_name?: "Signatory full name";
            /** @constant */
            Title?: "Title";
            /** @constant */
            Acts_under?: "Acts under";
            /** @constant */
            Of_chart?: "Chart";
            /** @constant */
            Of_certificate?: "Certificate";
            /** @constant */
            Of_power_of_attorney?: "Power of attorney";
            /** @constant */
            Of_contract_of_management?: "Contract of management";
            /** @constant */
            Signatory_full_name_genitive?: "Signatory full name in genitive case";
            /** @constant */
            Title_genitive?: "Title in genitive case";
            /** @constant */
            Number_of_signatories?: "Number of signatories";
            /** @constant */
            Create_Tinkoff_business_account?: "Create T-Business account";
            /** @constant */
            Domain_registration_or_renewal?: "Domain registration or renewal ID%paymentId%";
            /** @constant */
            Not_enough_money_for_purchase?: "You do not have enough funds to complete purchase";
            /** @constant */
            Manage_contract?: "Manage contract";
            /** @constant */
            Cash_receipts?: "Cash receipts";
            /** @constant */
            Reconciliation_statement?: "Reconciliation statement";
            /** @constant */
            Download_contract?: "Download contract";
            /** @constant */
            Sign_contract_via_diadoc?: "Sign contract via e-doc";
            /** @constant */
            Connect_to_diadoc?: "Connect Diadoc e-management";
            /** @constant */
            Download_envelope_cover?: "Download envelope cover";
            /** @constant */
            Receipts_for_period?: "Receipts for the period";
            /** @constant */
            Reconciliation_statement_for_period?: "Reconciliation statement for the period";
            /** @constant */
            Send_to_diadoc?: "Send via e-doc";
            /** @constant */
            Invoices_and_warrants?: "Invoices and warrants";
            /** @constant */
            Invoices_and_acts?: "Invoices and statements";
            /** @constant */
            Operations?: "Bank history";
            /** @constant */
            Invoice_number?: "Invoice number";
            /** @constant */
            Plan_not_selected?: "Plan<br> not selected";
            /** @constant */
            account_personal?: "personal";
            /** @constant */
            account_pricing_plan?: "pricing plan";
            /** @constant */
            account_bonus?: "bonus";
            /** @constant */
            Software?: "Software";
            /** @constant */
            Invoice?: "Invoice";
            /** @constant */
            Tools_and_pricing?: "Tools and prices";
            /** @constant */
            Start_for_free?: "Start for free";
            /** @constant */
            View_all_pricing_1?: "View full";
            /** @constant */
            View_all_pricing_2?: "pricing";
            /** @constant */
            Faster_payments_system?: "Faster payments system";
            /** @constant */
            QR_code?: "QR code";
            /** @constant */
            Full_amount?: "Full amount";
            /** @constant */
            Money_be_transferred_to_bonus_acc_no_withdraw?: "Funds will be transferred to the bonus account, you won't be able to withdraw it.";
            /** @constant */
            Select_amount_to_transfer?: "Select amount to transfer (rub.)";
            /** @constant */
            Do_you_want_continue?: "Do you want to continue?";
            /** @constant */
            Get_closing_documents_by_mail?: "Get closing documents by mail";
            /** @constant */
            Get_closing_documents_by_mail_info?: "Check this box to receive closing documents by mail. We will send the registered mail with the Russian Post, you will need to receive it at your post office.<br><br>\n\t\tIf you want to receive the documents in electronic form, accept our invitation to join electronic document flow.<br><br>\n\t\tIf your accounting department do not see this invitation, contact us. Sometimes the original documents are not necessary, you can always get the copies under Invoices and warrants.";
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
