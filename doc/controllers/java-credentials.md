# Java Credentials

```ts
const javaCredentialsController = new JavaCredentialsController(client);
```

## Class Name

`JavaCredentialsController`

## Methods

* [Api Credentials Java GET](../../doc/controllers/java-credentials.md#api-credentials-java-get)
* [Api Credentials Java POST](../../doc/controllers/java-credentials.md#api-credentials-java-post)
* [Api Credentials Java by Id GET](../../doc/controllers/java-credentials.md#api-credentials-java-by-id-get)
* [Api Credentials Java by Id DELETE](../../doc/controllers/java-credentials.md#api-credentials-java-by-id-delete)
* [Api Credentials Java by Id PATCH](../../doc/controllers/java-credentials.md#api-credentials-java-by-id-patch)
* [Api Credentials Java Publishing Profile by Id GET](../../doc/controllers/java-credentials.md#api-credentials-java-publishing-profile-by-id-get)


# Api Credentials Java GET

```ts
async apiCredentialsJavaGET(
  requestOptions?: RequestOptions
): Promise<ApiResponse<JavaCredentialsItem[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JavaCredentialsItem[]`](../../doc/models/java-credentials-item.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await javaCredentialsController.apiCredentialsJavaGET();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Api Credentials Java POST

```ts
async apiCredentialsJavaPOST(
  body?: CredentialsJavaUpsertCommand,
  requestOptions?: RequestOptions
): Promise<ApiResponse<JavaCredentialsItem>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CredentialsJavaUpsertCommand \| undefined`](../../doc/models/credentials-java-upsert-command.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JavaCredentialsItem`](../../doc/models/java-credentials-item.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await javaCredentialsController.apiCredentialsJavaPOST();
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


# Api Credentials Java by Id GET

```ts
async apiCredentialsJavaByIdGET(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<JavaCredentialsItem>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JavaCredentialsItem`](../../doc/models/java-credentials-item.md)

## Example Usage

```ts
const id = 'id0';
try {
  const { result, ...httpResponse } = await javaCredentialsController.apiCredentialsJavaByIdGET(id);
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


# Api Credentials Java by Id DELETE

```ts
async apiCredentialsJavaByIdDELETE(
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
  const { result, ...httpResponse } = await javaCredentialsController.apiCredentialsJavaByIdDELETE(id);
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


# Api Credentials Java by Id PATCH

```ts
async apiCredentialsJavaByIdPATCH(
  id: string,
  body?: CredentialsJavaUpdateProfileCommand,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `body` | [`CredentialsJavaUpdateProfileCommand \| undefined`](../../doc/models/credentials-java-update-profile-command.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const id = 'id0';
const contentType = null;
try {
  const { result, ...httpResponse } = await javaCredentialsController.apiCredentialsJavaByIdPATCH(id);
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


# Api Credentials Java Publishing Profile by Id GET

```ts
async apiCredentialsJavaPublishingProfileByIdGET(
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
  const { result, ...httpResponse } = await javaCredentialsController.apiCredentialsJavaPublishingProfileByIdGET(id);
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

