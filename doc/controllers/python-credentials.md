# Python Credentials

```ts
const pythonCredentialsController = new PythonCredentialsController(client);
```

## Class Name

`PythonCredentialsController`

## Methods

* [Api Credentials Python GET](../../doc/controllers/python-credentials.md#api-credentials-python-get)
* [Api Credentials Python POST](../../doc/controllers/python-credentials.md#api-credentials-python-post)
* [Api Credentials Python by Id GET](../../doc/controllers/python-credentials.md#api-credentials-python-by-id-get)
* [Api Credentials Python by Id DELETE](../../doc/controllers/python-credentials.md#api-credentials-python-by-id-delete)
* [Api Credentials Python by Id PATCH](../../doc/controllers/python-credentials.md#api-credentials-python-by-id-patch)
* [Api Credentials Python Publishing Profile GET](../../doc/controllers/python-credentials.md#api-credentials-python-publishing-profile-get)


# Api Credentials Python GET

```ts
async apiCredentialsPythonGET(
  requestOptions?: RequestOptions
): Promise<ApiResponse<PythonCredentialsItem[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PythonCredentialsItem[]`](../../doc/models/python-credentials-item.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await pythonCredentialsController.apiCredentialsPythonGET();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Credentials Python POST

```ts
async apiCredentialsPythonPOST(
  body?: CredentialsPythonUpsertCommand,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PythonCredentialsItem>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CredentialsPythonUpsertCommand \| undefined`](../../doc/models/credentials-python-upsert-command.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PythonCredentialsItem`](../../doc/models/python-credentials-item.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await pythonCredentialsController.apiCredentialsPythonPOST();
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


# Api Credentials Python by Id GET

```ts
async apiCredentialsPythonByIdGET(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PythonCredentialsItem>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PythonCredentialsItem`](../../doc/models/python-credentials-item.md)

## Example Usage

```ts
const id = 'id0';
try {
  const { result, ...httpResponse } = await pythonCredentialsController.apiCredentialsPythonByIdGET(id);
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


# Api Credentials Python by Id DELETE

```ts
async apiCredentialsPythonByIdDELETE(
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
  const { result, ...httpResponse } = await pythonCredentialsController.apiCredentialsPythonByIdDELETE(id);
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


# Api Credentials Python by Id PATCH

```ts
async apiCredentialsPythonByIdPATCH(
  id: string,
  body?: CredentialsPythonUpdateProfileCommand,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `body` | [`CredentialsPythonUpdateProfileCommand \| undefined`](../../doc/models/credentials-python-update-profile-command.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const id = 'id0';
const contentType = null;
try {
  const { result, ...httpResponse } = await pythonCredentialsController.apiCredentialsPythonByIdPATCH(id);
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


# Api Credentials Python Publishing Profile GET

```ts
async apiCredentialsPythonPublishingProfileGET(
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
  const { result, ...httpResponse } = await pythonCredentialsController.apiCredentialsPythonPublishingProfileGET(id);
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

