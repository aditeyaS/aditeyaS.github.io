import Skill from "@/types/skill";
import {
  SiAmazonapigateway,
  SiAmazonapigatewayHex,
  SiAmazoncloudwatch,
  SiAmazoncloudwatchHex,
  SiAmazondocumentdb,
  SiAmazondocumentdbHex,
  SiAmazondynamodb,
  SiAmazondynamodbHex,
  SiAmazonec2,
  SiAmazonec2Hex,
  SiAmazonrds,
  SiAmazonrdsHex,
  SiAmazonwebservices,
  SiAmazonwebservicesHex,
  SiAwslambda,
  SiAwslambdaHex,
  SiRender,
  SiRenderHex,
  SiVercel,
  SiVercelHex,
} from "@icons-pack/react-simple-icons";

export const S_Aws: Skill = {
  name: "Amazon Web Services",
  icon: <SiAmazonwebservices />,
  color: SiAmazonwebservicesHex,
};

const API_GATEWAY: Skill = {
  name: "Amazon API Gateway",
  icon: <SiAmazonapigateway />,
  color: SiAmazonapigatewayHex,
};

const CLOUD_WATCH: Skill = {
  name: "Amazon Cloud Watch",
  icon: <SiAmazoncloudwatch />,
  color: SiAmazoncloudwatchHex,
};

const AWS_DOC_DB: Skill = {
  name: "Amazon DocumentDB",
  icon: <SiAmazondocumentdb />,
  color: SiAmazondocumentdbHex,
};

const DYNAMO_DB: Skill = {
  name: "Amazon DynamoDB",
  icon: <SiAmazondynamodb />,
  color: SiAmazondynamodbHex,
};

const AWS_EC2: Skill = {
  name: "Amazon EC2",
  icon: <SiAmazonec2 />,
  color: SiAmazonec2Hex,
};

const AWS_RDS: Skill = {
  name: "Amazon RDS",
  icon: <SiAmazonrds />,
  color: SiAmazonrdsHex,
};

export const S_Awslambda: Skill = {
  name: "AWS Lambda",
  icon: <SiAwslambda />,
  color: SiAwslambdaHex,
};

const VERCEL: Skill = {
  name: "Vercel",
  icon: <SiVercel />,
  color: SiVercelHex,
};

const RENDER: Skill = {
  name: "Render",
  icon: <SiRender />,
  color: SiRenderHex,
};

export const SKILL_CLOUD = [
  S_Aws,
  S_Awslambda,
  API_GATEWAY,
  CLOUD_WATCH,
  DYNAMO_DB,
  AWS_RDS,
  AWS_EC2,
  AWS_DOC_DB,
  VERCEL,
  RENDER,
];
