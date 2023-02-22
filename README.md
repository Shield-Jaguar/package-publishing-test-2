
# Getting Started with PackagePublishing.Web

## Install the Package

Run the following command from your project directory to install the package from npm:

```ts
npm install apimatic_calculator_dev@1.0.7
```

For additional package details, see the [Npm page for the apimatic_calculator_dev@1.0.7  npm](https://www.npmjs.com/package/apimatic_calculator_dev/v/1.0.7).

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | Environment | The API environment. <br> **Default: `Environment.Production`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  environment: Environment.Production,
});
```

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| production | **Default** Localhost |
| environment2 | Dev |

## List of APIs

* [C Sharp Credentials](doc/controllers/c-sharp-credentials.md)
* [Git Credentials](doc/controllers/git-credentials.md)
* [Java Credentials](doc/controllers/java-credentials.md)
* [Php Credentials](doc/controllers/php-credentials.md)
* [Publishing](doc/controllers/publishing.md)
* [Publishing Profile](doc/controllers/publishing-profile.md)
* [Publishing Profile Configuration](doc/controllers/publishing-profile-configuration.md)
* [Python Credentials](doc/controllers/python-credentials.md)
* [Ruby Credentials](doc/controllers/ruby-credentials.md)
* [Type Script Credentials](doc/controllers/type-script-credentials.md)

## Classes Documentation

* [ApiResponse](doc/api-response.md)
* [ApiError](doc/api-error.md)

