# Type Script Credentials

```ts
const typeScriptCredentialsController = new TypeScriptCredentialsController(client);
```

## Class Name

`TypeScriptCredentialsController`

## Methods

* [Api Credentials Typescript GET](../../doc/controllers/type-script-credentials.md#api-credentials-typescript-get)
* [Api Credentials Typescript POST](../../doc/controllers/type-script-credentials.md#api-credentials-typescript-post)
* [Api Credentials Typescript by Id GET](../../doc/controllers/type-script-credentials.md#api-credentials-typescript-by-id-get)
* [Api Credentials Typescript by Id DELETE](../../doc/controllers/type-script-credentials.md#api-credentials-typescript-by-id-delete)
* [Api Credentials Typescript by Id PATCH](../../doc/controllers/type-script-credentials.md#api-credentials-typescript-by-id-patch)
* [Api Credentials Typescript Publishing Profile GET](../../doc/controllers/type-script-credentials.md#api-credentials-typescript-publishing-profile-get)


# Api Credentials Typescript GET

```ts
async apiCredentialsTypescriptGET(
  requestOptions?: RequestOptions
): Promise<ApiResponse<TypeScriptCredentialsItem[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TypeScriptCredentialsItem[]`](../../doc/models/type-script-credentials-item.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await typeScriptCredentialsController.apiCredentialsTypescriptGET();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Credentials Typescript POST

```ts
async apiCredentialsTypescriptPOST(
  body?: CredentialsTypeScriptUpsertCommand,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TypeScriptCredentialsItem>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CredentialsTypeScriptUpsertCommand \| undefined`](../../doc/models/credentials-type-script-upsert-command.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TypeScriptCredentialsItem`](../../doc/models/type-script-credentials-item.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await typeScriptCredentialsController.apiCredentialsTypescriptPOST();
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


# Api Credentials Typescript by Id GET

```ts
async apiCredentialsTypescriptByIdGET(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TypeScriptCredentialsItem>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TypeScriptCredentialsItem`](../../doc/models/type-script-credentials-item.md)

## Example Usage

```ts
const id = 'id0';
try {
  const { result, ...httpResponse } = await typeScriptCredentialsController.apiCredentialsTypescriptByIdGET(id);
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


# Api Credentials Typescript by Id DELETE

```ts
async apiCredentialsTypescriptByIdDELETE(
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
  const { result, ...httpResponse } = await typeScriptCredentialsController.apiCredentialsTypescriptByIdDELETE(id);
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


# Api Credentials Typescript by Id PATCH

```ts
async apiCredentialsTypescriptByIdPATCH(
  id: string,
  body?: CredentialsTypeScriptUpdateProfileCommand,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `body` | [`CredentialsTypeScriptUpdateProfileCommand \| undefined`](../../doc/models/credentials-type-script-update-profile-command.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const id = 'id0';
const contentType = null;
try {
  const { result, ...httpResponse } = await typeScriptCredentialsController.apiCredentialsTypescriptByIdPATCH(id);
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


# Api Credentials Typescript Publishing Profile GET

```ts
async apiCredentialsTypescriptPublishingProfileGET(
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
  const { result, ...httpResponse } = await typeScriptCredentialsController.apiCredentialsTypescriptPublishingProfileGET(id);
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

