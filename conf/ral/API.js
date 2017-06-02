/**
 * Created by baidu on 17/6/2.
 */
module.exports.MAPAPI = {  // 声明服务名为MAPAPI
    protocol: 'http',      // 使用http协议请求
    pack: 'querystring',   // 数据封装为query
    unpack: 'json',        // 约定服务端返回json数据
    encoding: 'utf-8',     // 服务端返回utf-8编码

    // 负载均衡和超时配置
    balance: 'roundrobin',  // 负载均衡策略
    timeout: 500,           // 请求最长超时时间500ms
    retry: 1,               // 请求重试次数

    // HTTP协议特有配置
    method: 'GET',          // 使用GET请求
    query: {                // 服务的全局query
        ak: '0C62f9f0ee027b6052dfa35b0f38b61a',
        output: 'json',
        page_size: 10,
        page_num: 0,
        scope: 1
    },
    path: '',               // API路径
    headers: {              // 服务的全局headers
        'x-client': 'ral'
    },
    // 后端地址配置
    server: [               // 可以配置多个后端地址
        {
            host: '',
            port: ''
        }
    ]
};