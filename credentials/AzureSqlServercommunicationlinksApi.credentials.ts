import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSqlServercommunicationlinksApi implements ICredentialType {
        name = 'N8nDevAzureSqlServercommunicationlinksApi';

        displayName = 'Azure SQL Servercommunicationlinks API';

        icon: Icon = { light: 'file:../nodes/AzureSqlServercommunicationlinks/azure-sql-servercommunicationlinks.png', dark: 'file:../nodes/AzureSqlServercommunicationlinks/azure-sql-servercommunicationlinks.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure SQL Servercommunicationlinks API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
