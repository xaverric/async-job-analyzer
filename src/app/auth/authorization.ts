import callCommand from "../client/api/calls";
import Configuration from "../conf/types/Configuration";

/**
 * Function authorizes with provided parameters and returns authorization token
 * 
 * @param cfg {@link Configuration} object
 * @returns authorization token string
 */
const login = async (cfg: Configuration): Promise<string> => {
  const credentials = {
    accessCode1: cfg.ac1,
    accessCode2: cfg.ac2,
    grant_type: 'password',
    scope: 'openid https:// http://localhost'
  };

  const response = await callCommand({
    url: cfg.hostOidc, 
    method: "POST", 
    data: credentials
  });

  return response.id_token;
};

export default login;
