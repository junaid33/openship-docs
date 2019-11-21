import React from "react";
import { Box } from "@chakra-ui/core";

const node = ({ transform, style, title }) => <Box {...style}>{title}</Box>;

export default node;
