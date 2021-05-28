import { NextApiResponse } from "next";

declare global {
    type PossibleResults = string;
    interface ResponseError {
        message?: string;
        /**
         * In case of validation errors,
         * `field` is the parameter that
         * is invalid.
         */
        field?: string;
        code: "method_not_allowed" | "uknown_error";
    }

    /**
     * It is the default model for all
     * API responses, must be returned
     * everytime it is possible by the
     * controllers.
     */
    interface ResponseStructure {
        message?: string;
        result?: PossibleResults;
        errors?: ResponseError[] | null;
        /** Link to documentation */
        documentation_url?: string;
    }
}


declare module "next" {
    interface NextApiStructuredResponse extends NextApiResponse {
        json: (body: ResponseStructure) => void;
    }
}
