import { NextApiRequest, NextApiStructuredResponse } from "next";

export default (req: NextApiRequest, res: NextApiStructuredResponse) => {
    switch (req.method) {
        case "POST":
            res.status(501).json({
                message: "My bad lol"
            });
        default:
            res.status(405).json({
                message: "Try using POST instead.",
                errors: [{
                    code: "method_not_allowed",
                    message:
                        `${req.method || "This"} method is not allowed in ${req.url || "this route"}.`
                }],
            });
    }
}
