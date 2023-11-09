import { connect } from '@tidbcloud/serverless'

const conn = connect({url: 'mysql://2HknbsVHTKvxpne.root:Level42!@gateway01.us-east-1.prod.aws.tidbcloud.com/[database]'})
const results = await conn.execute('select * from test where id = ?',[1])