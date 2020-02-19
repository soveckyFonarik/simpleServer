import {
    handleCompression,
    handleCors,
    handleBodyRequestParsing
} from './common'

import { handleAPIDocs } from './apiDocs'

export default [
    handleCors,
    handleBodyRequestParsing,
    handleCompression,
    handleAPIDocs
];