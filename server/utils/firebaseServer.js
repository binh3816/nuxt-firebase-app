import { credential } from "firebase-admin";
import { initializeApp, cert, getApps } from "firebase-admin/app";

const config = {
  type: "service_account",
  project_id: "tutorial-78fbb",
  private_key_id: "ca632b49acdf740100f7dae531a5a7f5b11a1537",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQClnJMkD9Rn5mpb\nJfcAj3MgHGnsG2C2pvp6GRz3t/b74BRHHm0lRwkx7ZJnoBB+Ma67SEQuLytR+Tvu\nQCHY6h66bCdnY/Ol2Wjr2ySzaK5xWZX401jG5F+wDjYpK+kTHPKkbSV7YsQt52k/\nHowuCfHZePpWm3ibrZKO23QgvHgnK6G5TyjuxgddyEuYbnQDTo6XqrkZg5VdxbRu\ns2/a7hENX9kSStNfpDxiydd56ZYUHRkjWocJah1F4N3kpDWu5lPeivLgHmlaeosI\nhtdGi1llabXA1T8TKEQMo8yr0qW38wg1XPGPVR+eJydaBC7T1+bKtaIQbTv3S7Nz\n1x/ZTPBtAgMBAAECggEACCe98i5qYARvc9Yag/dMbMYhbCxL9qqh1n3imItBWRVn\ngjoMF2QYXpJLnZk6/q/dIiFUpC6T9Ekw65JSaF9dDIKTbSq1npLmcQjdVY1f27qU\n4UgtDLxFvwJwJdZg9507EKBEUn9iWD1XSDGtpv274GDt+PJWfdoOB8VkQlFtnEYc\nNPpvd3bT0TB4R3zTBAZNS8+drvMDLAyZ34ss08Jc+F1jHAVRFnMF3/CaJSZzx9jj\n4C10n6sk3EpZV+F1i0lWSjQoA+yJHdDh1N3/Yoe+WpYL9KZ9eOqGaWc2CmjTddG8\nbQ6uAOPWhVeD6upVagcIUD0H8u+Ppx1G3zkaVnq9CQKBgQDZpMLSoO0UQ8x2TzwA\nUVS7lqk6RQzKr+pIglwbFaCQFyqnsYRSJTuYvAUcNbAbSjqKhRTKUkCn5seHihfc\nc2DoffvufXj6qiMW6aXJZU1pgMhNVOd3+7vQdOivRKlHAzF8CLUlklm2FM1QzxZ7\nCe/+lEQsq4TE5BscTdv7Wj8bZQKBgQDCzFTu7rG4nkEgJtx2wt3bUvR8lXcAD0QJ\ncz+agI2PV0/ydg9gJgiNNJ9SwZvoMWjlMhE9eBj5/MeLC+75hyB5E8bdMVJ5vx2s\ngCT+2Hx5S/BQCJRFJUQWyenrt2iuZVYupbxlg+fiuufyeG0NLbhdWn0aupj5lunp\n0weIPYakaQKBgBzb3gFz2TvgqZHee8RHBIdDOPlDAqk1nkkzD+d/fKTejYdi4HrL\n+RUNiVfuPoW/1/daIiGZun0I+tgcFYHjwqvRWMCM3qfOO4zkOll0F0mwC99FLNQa\nCxNfDSOAZTnHUJ5zwSFUQJUGORtH+mEiNjJ5knih3Z8F6BpesJappsiJAoGBAII4\nnHKZqL71NC4tLGZMAInU29HJDSNCEUaL/7HmTDvNr4kzeTXaVw8mZXeqK/I9zZSi\nMro35eKAJFkEoj23InMuUFuf1DXFGC4wAAtJZ3Si2kR2Z8ANmIXvduv30Qf8gG9w\npg/q7QI51kLWVHhh3wSxMD7FDOyVAUwpobhnAPI5AoGBAK8FCVpYLO2UmFqqi02z\njkjuIG7P0+p7hvxqmAsiSkJoRwbq/OAOQENfY9W/aupF1SKCeNCfAj1W6pz/CeKa\n/vNQHl10tbmoVOcWAv/tPhrCJ+SLlSI7ATO8rM3xiTqEMHB0jKWO+gNLKPSBOBCq\n8rdt05z49JO2NLJPyQG7SPca\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-xzk5b@tutorial-78fbb.iam.gserviceaccount.com",
  client_id: "108857492803101184995",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xzk5b%40tutorial-78fbb.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

export default function firebaseServer() {
  if (getApps().length === 0) initializeApp({ credential: cert(config) });
}
