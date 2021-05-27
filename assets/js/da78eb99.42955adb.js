(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),o=(n(0),n(108));const i={title:"Keycloak"},r={unversionedId:"keycloak",id:"keycloak",isDocsHomePage:!1,title:"Keycloak",description:"Why Keycloak?",source:"@site/docs/keycloak.md",slug:"/keycloak",permalink:"/docs/keycloak",version:"current",sidebar:"docs",previous:{title:"Appsmith Migrations",permalink:"/docs/appsmith"},next:{title:"Postgres migrations",permalink:"/docs/pg-diff-migrations"}},s=[{value:"Why Keycloak?",id:"why-keycloak",children:[]},{value:"React Native (Expo)",id:"react-native-expo",children:[]},{value:"Web Client",id:"web-client",children:[]}],c={toc:s};function l({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"why-keycloak"},"Why Keycloak?"),Object(o.b)("p",null,"Keycloak is an Open Source Identity and Access Management solution for modern Applications and Services.\nIt can be used to add authentication to our services without worrying about all the setup authentication may need.\nKeycloak server can be deployed using Docker which makes it easy to integrate with other services we use in Chewy Stack.\nFirst, get up and running with Keycloak server by following the instructions ",Object(o.b)("a",{parentName:"p",href:"https://www.keycloak.org/getting-started/getting-started-docker"},"here")," .\nThere are lots of libraries available to integrate Keycloak with our service depending on the programming language or technology it uses."),Object(o.b)("h2",{id:"react-native-expo"},"React Native (Expo)"),Object(o.b)("p",null,"Instructions here are for React Native apps built using Expo managed workflow.\nThe libraries used for getting authentication urls and doing all the tasks related to authentication flow are from Expo team.\nWe will be using expo-auth-session library to interact with keycloak server. There are few Authentication flows to follow ,\nmore on this ",Object(o.b)("a",{parentName:"p",href:"https://auth0.com/docs/flows"},"here")," , but we will be following the Standard Code flow or Authorization Code flow with PKCE.",Object(o.b)("br",{parentName:"p"}),"\n","Let's import the following"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"import {\nexchangeCodeAsync,\nmakeRedirectUri,\nResponseType,\nuseAuthRequest,\nuseAutoDiscovery,\n} from 'expo-auth-session';\n")),Object(o.b)("p",null,"first step in authentication with keycloak from the app is to get the authentication URLs from the keyclaok server that contains the endpoint where expo will start the authentication process by sending the GET api call with all the information in query params.  To get the the document use"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const discovery = useAutoDiscovery(\n'http://<keycloak-domain>/auth/realms/<Realm-name>');\n")),Object(o.b)("p",null,"If you are running Keycloak server locally at port number ",Object(o.b)("inlineCode",{parentName:"p"},"9000")," and created a realm named ",Object(o.b)("inlineCode",{parentName:"p"},"Sample")," the argument will look something like this"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"'http://localhost:9000/auth/realms/Sample'\n")),Object(o.b)("p",null,"This ",Object(o.b)("inlineCode",{parentName:"p"},"discovery")," variable will now contain all the endpoints ",Object(o.b)("inlineCode",{parentName:"p"},"expo-auth-session")," needs to perform authentication\nrelated tasks.\nNow we will get the ",Object(o.b)("inlineCode",{parentName:"p"},"code")," or ",Object(o.b)("inlineCode",{parentName:"p"},"authorization_code")," from  keycloak server , which will be used to further get ",Object(o.b)("inlineCode",{parentName:"p"},"accessToken")," , ",Object(o.b)("inlineCode",{parentName:"p"},"idToken"),",  and ",Object(o.b)("inlineCode",{parentName:"p"},"refreshToken"),"\nNow we need ",Object(o.b)("inlineCode",{parentName:"p"},"redirectUri")," , where after authentication session , it will redirect back to our app."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const redirectUri = makeRedirectUri({\nnative: 'myApp://redirect',\nuseProxy,\n});\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"myApp")," is a scheme that can be added in ",Object(o.b)("inlineCode",{parentName:"p"},"app.json")," file.",Object(o.b)("br",{parentName:"p"}),"\n","Define ",Object(o.b)("inlineCode",{parentName:"p"},"requestOptions")," object to send auth request"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const authRequestOptions: AuthRequestConfig = {\n    usePKCE: true,\n    responseType: ResponseType.Code,\n    clientId: 'sample-client',\n    redirectUri,\n    prompt: Prompt.Login,\n    scopes: ['openid', 'profile', 'email', 'offline_access'],\n    state,\n    extraParams: {\n      audience: 'http://localhost:3000',\n      access_type: 'offline',\n    },\n  };\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"AuthRequest")," will initialize the auth request and ",Object(o.b)("inlineCode",{parentName:"p"},"authRequest.promptAsync()")," will provide us with a ",Object(o.b)("inlineCode",{parentName:"p"},"code"),"\nand other information. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"const authRequest = new AuthRequest(authRequestOptions);\n    const authorizeResult = await authRequest.promptAsync(\n      { authorizationEndpoint: discovery?.authorizationEndpoint },\n      {\n        useProxy: true,\n      },\n    );\n    const response = await exchangeCodeAsync(\n      {\n        code: (authorizeResult as any)?.params?.code,\n        clientId: 'sample-client',\n        redirectUri,\n        extraParams: {\n          code_verifier: authRequest.codeVerifier as string,\n        },\n      },\n      { tokenEndpoint: discovery?.tokenEndpoint },\n    );\n")),Object(o.b)("p",null,"Now we have everything we need to get tokens from Keycloak. ",Object(o.b)("inlineCode",{parentName:"p"},"response")," above contains tokens we need.\nWe are setting ",Object(o.b)("inlineCode",{parentName:"p"},"usePKCE:true")," in request options,\nbecause we are using ",Object(o.b)("inlineCode",{parentName:"p"},"PKCE")," to improve security of our authorization process."),Object(o.b)("h2",{id:"web-client"},"Web Client"))}l.isMDXComponent=!0}}]);