/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "Controller_2.Objects.Page": {
            location: import('./Location.ts').components['schemas']['Controller_2.Objects.Location'];
            _GET: (string | number)[];
            openGraph: import('./OpenGraph.ts').components['schemas']['Controller_2.Objects.OpenGraph'];
            options: import('./Page/Options.ts').components['schemas']['Controller_2.Objects.Page.Options'];
            article: import('./Page/Article.ts').components['schemas']['Controller_2.Objects.Page.Article'];
            secondMenu: import('../../Tpl/Core/SecondMenu.ts').components['schemas']['Tpl.Core.SecondMenu'];
            leftMenu: import('../../Tpl/Core/LeftMenu.ts').components['schemas']['Tpl.Core.LeftMenu'];
            params: (string | number)[];
            site: import('../../TV/Core/Sites/Site.ts').components['schemas']['TV.Core.Sites.Site'];
            subdomain: string;
            langContext: string;
            langUrl: string;
            modUrl: string;
            mod: string;
            subMod: string;
            /** @default regular */
            theme: string;
            jsonLDs: (string | number)[];
            htmlAttributes: (string | number)[];
            logo: string;
            redirect: string;
            /** @default 302 */
            redirectCode: number;
            tplEngine: import('./TplEngine.ts').components['schemas']['Controller_2.Objects.TplEngine'];
            tplStaticPath: string;
            tplStatic: string;
            tplStaticRendered: string;
            /** @default mods/content.php */
            tplPath: string;
            tplRendered: string;
            tplSiteRendered: string;
            data: (string | number)[];
            rightsLabels: (string | number)[];
            isFullSize: boolean;
            showFooter: boolean;
            isAdaptive: boolean;
            additionalHeadCode: string;
            v: string;
            vJS: string;
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
