import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSqlServercommunicationlinks implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure SQL Servercommunicationlinks',
                name: 'N8nDevAzureSqlServercommunicationlinks',
                icon: { light: 'file:./azure-sql-servercommunicationlinks.png', dark: 'file:./azure-sql-servercommunicationlinks.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure SQL CRUD operations via communication links.',
                defaults: { name: 'Azure SQL Servercommunicationlinks' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureSqlServercommunicationlinksApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
