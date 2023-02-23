# Ruby Credentials

```ts
const rubyCredentialsController = new RubyCredentialsController(client);
```

## Class Name

`RubyCredentialsController`

## Methods

* [Api Credentials Ruby GET](../../doc/controllers/ruby-credentials.md#api-credentials-ruby-get)
* [Api Credentials Ruby POST](../../doc/controllers/ruby-credentials.md#api-credentials-ruby-post)
* [Api Credentials Ruby by Id GET](../../doc/controllers/ruby-credentials.md#api-credentials-ruby-by-id-get)
* [Api Credentials Ruby by Id DELETE](../../doc/controllers/ruby-credentials.md#api-credentials-ruby-by-id-delete)
* [Api Credentials Ruby by Id PATCH](../../doc/controllers/ruby-credentials.md#api-credentials-ruby-by-id-patch)
* [Api Credentials Ruby Publishing Profile by Id GET](../../doc/controllers/ruby-credentials.md#api-credentials-ruby-publishing-profile-by-id-get)


# Api Credentials Ruby GET

```ts
async apiCredentialsRubyGET(
  requestOptions?: RequestOptions
): Promise<ApiResponse<RubyCredentialsItem[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RubyCredentialsItem[]`](../../doc/models/ruby-credentials-item.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await rubyCredentialsController.apiCredentialsRubyGET();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Credentials Ruby POST

```ts
async apiCredentialsRubyPOST(
  body?: CredentialsRubyUpsertCommand,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RubyCredentialsItem>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CredentialsRubyUpsertCommand \| undefined`](../../doc/models/credentials-ruby-upsert-command.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RubyCredentialsItem`](../../doc/models/ruby-credentials-item.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await rubyCredentialsController.apiCredentialsRubyPOST();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ValidationProblemDetailsError`](../../doc/models/validation-problem-details-error.md) |
| 404 | Not Found | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |
| Default | Error | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |


# Api Credentials Ruby by Id GET

```ts
async apiCredentialsRubyByIdGET(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RubyCredentialsItem>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RubyCredentialsItem`](../../doc/models/ruby-credentials-item.md)

## Example Usage

```ts
const id = 'id0';
try {
  const { result, ...httpResponse } = await rubyCredentialsController.apiCredentialsRubyByIdGET(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ValidationProblemDetailsError`](../../doc/models/validation-problem-details-error.md) |
| 404 | Not Found | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |
| Default | Error | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |


# Api Credentials Ruby by Id DELETE

```ts
async apiCredentialsRubyByIdDELETE(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const id = 'id0';
try {
  const { result, ...httpResponse } = await rubyCredentialsController.apiCredentialsRubyByIdDELETE(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ValidationProblemDetailsError`](../../doc/models/validation-problem-details-error.md) |
| 404 | Not Found | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |
| Default | Error | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |


# Api Credentials Ruby by Id PATCH

```ts
async apiCredentialsRubyByIdPATCH(
  id: string,
  body?: CredentialsRubyUpdateProfileCommand,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `body` | [`CredentialsRubyUpdateProfileCommand \| undefined`](../../doc/models/credentials-ruby-update-profile-command.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const id = 'id0';
const contentType = null;
try {
  const { result, ...httpResponse } = await rubyCredentialsController.apiCredentialsRubyByIdPATCH(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ValidationProblemDetailsError`](../../doc/models/validation-problem-details-error.md) |
| 404 | Not Found | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |
| Default | Error | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |


# Api Credentials Ruby Publishing Profile by Id GET

```ts
async apiCredentialsRubyPublishingProfileByIdGET(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<string[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`string[]`

## Example Usage

```ts
const id = 'id0';
try {
  const { result, ...httpResponse } = await rubyCredentialsController.apiCredentialsRubyPublishingProfileByIdGET(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ValidationProblemDetailsError`](../../doc/models/validation-problem-details-error.md) |
| 404 | Not Found | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |
| Default | Error | [`ProblemDetailsError`](../../doc/models/problem-details-error.md) |

