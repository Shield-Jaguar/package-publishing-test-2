# C Sharp Credentials

```ts
const cSharpCredentialsController = new CSharpCredentialsController(client);
```

## Class Name

`CSharpCredentialsController`

## Methods

* [Api Credentials Csharp GET](../../doc/controllers/c-sharp-credentials.md#api-credentials-csharp-get)
* [Api Credentials Csharp POST](../../doc/controllers/c-sharp-credentials.md#api-credentials-csharp-post)
* [Api Credentials Csharp by Id GET](../../doc/controllers/c-sharp-credentials.md#api-credentials-csharp-by-id-get)
* [Api Credentials Csharp by Id DELETE](../../doc/controllers/c-sharp-credentials.md#api-credentials-csharp-by-id-delete)
* [Api Credentials Csharp by Id PATCH](../../doc/controllers/c-sharp-credentials.md#api-credentials-csharp-by-id-patch)
* [Api Credentials Csharp Publishing Profile GET](../../doc/controllers/c-sharp-credentials.md#api-credentials-csharp-publishing-profile-get)


# Api Credentials Csharp GET

```ts
async apiCredentialsCsharpGET(
  requestOptions?: RequestOptions
): Promise<ApiResponse<CSharpCredentialsItem[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CSharpCredentialsItem[]`](../../doc/models/c-sharp-credentials-item.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await cSharpCredentialsController.apiCredentialsCsharpGET();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Credentials Csharp POST

```ts
async apiCredentialsCsharpPOST(
  body?: CredentialsCSharpUpsertCommand,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CSharpCredentialsItem>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CredentialsCSharpUpsertCommand \| undefined`](../../doc/models/credentials-c-sharp-upsert-command.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CSharpCredentialsItem`](../../doc/models/c-sharp-credentials-item.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await cSharpCredentialsController.apiCredentialsCsharpPOST();
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


# Api Credentials Csharp by Id GET

```ts
async apiCredentialsCsharpByIdGET(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CSharpCredentialsItem>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CSharpCredentialsItem`](../../doc/models/c-sharp-credentials-item.md)

## Example Usage

```ts
const id = 'id0';
try {
  const { result, ...httpResponse } = await cSharpCredentialsController.apiCredentialsCsharpByIdGET(id);
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


# Api Credentials Csharp by Id DELETE

```ts
async apiCredentialsCsharpByIdDELETE(
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
  const { result, ...httpResponse } = await cSharpCredentialsController.apiCredentialsCsharpByIdDELETE(id);
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


# Api Credentials Csharp by Id PATCH

```ts
async apiCredentialsCsharpByIdPATCH(
  id: string,
  body?: CredentialsCSharpUpdateProfileCommand,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `body` | [`CredentialsCSharpUpdateProfileCommand \| undefined`](../../doc/models/credentials-c-sharp-update-profile-command.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const id = 'id0';
const contentType = null;
try {
  const { result, ...httpResponse } = await cSharpCredentialsController.apiCredentialsCsharpByIdPATCH(id);
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


# Api Credentials Csharp Publishing Profile GET

```ts
async apiCredentialsCsharpPublishingProfileGET(
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
  const { result, ...httpResponse } = await cSharpCredentialsController.apiCredentialsCsharpPublishingProfileGET(id);
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

