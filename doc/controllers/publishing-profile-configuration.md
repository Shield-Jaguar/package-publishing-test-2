# Publishing Profile Configuration

```ts
const publishingProfileConfigurationController = new PublishingProfileConfigurationController(client);
```

## Class Name

`PublishingProfileConfigurationController`

## Methods

* [Api Publishing Profile Csharp by Profile Id POST](../../doc/controllers/publishing-profile-configuration.md#api-publishing-profile-csharp-by-profile-id-post)
* [Api Publishing Profile Csharp Disable PATCH](../../doc/controllers/publishing-profile-configuration.md#api-publishing-profile-csharp-disable-patch)
* [Api Publishing Profile Git by Profile Id POST](../../doc/controllers/publishing-profile-configuration.md#api-publishing-profile-git-by-profile-id-post)
* [Api Publishing Profile Git Disable PATCH](../../doc/controllers/publishing-profile-configuration.md#api-publishing-profile-git-disable-patch)
* [Api Publishing Profile Go by Profile Id POST](../../doc/controllers/publishing-profile-configuration.md#api-publishing-profile-go-by-profile-id-post)
* [Api Publishing Profile Go Disable by Profile Id PATCH](../../doc/controllers/publishing-profile-configuration.md#api-publishing-profile-go-disable-by-profile-id-patch)
* [Api Publishing Profile Java by Profile Id POST](../../doc/controllers/publishing-profile-configuration.md#api-publishing-profile-java-by-profile-id-post)
* [Api Publishing Profile Java Disable PATCH](../../doc/controllers/publishing-profile-configuration.md#api-publishing-profile-java-disable-patch)
* [Api Publishing Profile Php by Profile Id POST](../../doc/controllers/publishing-profile-configuration.md#api-publishing-profile-php-by-profile-id-post)
* [Api Publishing Profile Php Disable PATCH](../../doc/controllers/publishing-profile-configuration.md#api-publishing-profile-php-disable-patch)
* [Api Publishing Profile Python by Profile Id POST](../../doc/controllers/publishing-profile-configuration.md#api-publishing-profile-python-by-profile-id-post)
* [Api Publishing Profile Python Disable PATCH](../../doc/controllers/publishing-profile-configuration.md#api-publishing-profile-python-disable-patch)
* [Api Publishing Profile Ruby by Profile Id POST](../../doc/controllers/publishing-profile-configuration.md#api-publishing-profile-ruby-by-profile-id-post)
* [Api Publishing Profile Ruby Disable PATCH](../../doc/controllers/publishing-profile-configuration.md#api-publishing-profile-ruby-disable-patch)
* [Api Publishing Profile Swift by Profile Id POST](../../doc/controllers/publishing-profile-configuration.md#api-publishing-profile-swift-by-profile-id-post)
* [Api Publishing Profile Swift Disable PATCH](../../doc/controllers/publishing-profile-configuration.md#api-publishing-profile-swift-disable-patch)
* [Api Publishing Profile Typescript POST](../../doc/controllers/publishing-profile-configuration.md#api-publishing-profile-typescript-post)
* [Api Publishing Profile Typescript Disable PATCH](../../doc/controllers/publishing-profile-configuration.md#api-publishing-profile-typescript-disable-patch)


# Api Publishing Profile Csharp by Profile Id POST

```ts
async apiPublishingProfileCsharpByProfileIdPOST(
  profileId: string,
  body?: ConfigurationsCSharpUpsertCommand,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `profileId` | `string` | Template, Required | - |
| `body` | [`ConfigurationsCSharpUpsertCommand \| undefined`](../../doc/models/configurations-c-sharp-upsert-command.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const profileId = 'profileId0';
const contentType = null;
try {
  const { result, ...httpResponse } = await publishingProfileConfigurationController.apiPublishingProfileCsharpByProfileIdPOST(profileId);
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


# Api Publishing Profile Csharp Disable PATCH

```ts
async apiPublishingProfileCsharpDisablePATCH(
  profileId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `profileId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const profileId = 'profileId0';
try {
  const { result, ...httpResponse } = await publishingProfileConfigurationController.apiPublishingProfileCsharpDisablePATCH(profileId);
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


# Api Publishing Profile Git by Profile Id POST

```ts
async apiPublishingProfileGitByProfileIdPOST(
  profileId: string,
  language: LanguageEnum,
  body?: ConfigurationsGitUpsertCommand,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `profileId` | `string` | Template, Required | - |
| `language` | [`LanguageEnum`](../../doc/models/language-enum.md) | Template, Required | - |
| `body` | [`ConfigurationsGitUpsertCommand \| undefined`](../../doc/models/configurations-git-upsert-command.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const profileId = 'profileId0';
const language = 'Java';
const contentType = null;
try {
  const { result, ...httpResponse } = await publishingProfileConfigurationController.apiPublishingProfileGitByProfileIdPOST(profileId, language);
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


# Api Publishing Profile Git Disable PATCH

```ts
async apiPublishingProfileGitDisablePATCH(
  profileId: string,
  language: LanguageEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `profileId` | `string` | Template, Required | - |
| `language` | [`LanguageEnum`](../../doc/models/language-enum.md) | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const profileId = 'profileId0';
const language = 'Java';
try {
  const { result, ...httpResponse } = await publishingProfileConfigurationController.apiPublishingProfileGitDisablePATCH(profileId, language);
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


# Api Publishing Profile Go by Profile Id POST

```ts
async apiPublishingProfileGoByProfileIdPOST(
  profileId: string,
  body?: ConfigurationsGoUpsertCommand,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `profileId` | `string` | Template, Required | - |
| `body` | [`ConfigurationsGoUpsertCommand \| undefined`](../../doc/models/configurations-go-upsert-command.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const profileId = 'profileId0';
const contentType = null;
try {
  const { result, ...httpResponse } = await publishingProfileConfigurationController.apiPublishingProfileGoByProfileIdPOST(profileId);
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


# Api Publishing Profile Go Disable by Profile Id PATCH

```ts
async apiPublishingProfileGoDisableByProfileIdPATCH(
  profileId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `profileId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const profileId = 'profileId0';
try {
  const { result, ...httpResponse } = await publishingProfileConfigurationController.apiPublishingProfileGoDisableByProfileIdPATCH(profileId);
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


# Api Publishing Profile Java by Profile Id POST

```ts
async apiPublishingProfileJavaByProfileIdPOST(
  profileId: string,
  body?: ConfigurationsJavaUpsertCommand,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `profileId` | `string` | Template, Required | - |
| `body` | [`ConfigurationsJavaUpsertCommand \| undefined`](../../doc/models/configurations-java-upsert-command.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const profileId = 'profileId0';
const contentType = null;
try {
  const { result, ...httpResponse } = await publishingProfileConfigurationController.apiPublishingProfileJavaByProfileIdPOST(profileId);
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


# Api Publishing Profile Java Disable PATCH

```ts
async apiPublishingProfileJavaDisablePATCH(
  profileId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `profileId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const profileId = 'profileId0';
try {
  const { result, ...httpResponse } = await publishingProfileConfigurationController.apiPublishingProfileJavaDisablePATCH(profileId);
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


# Api Publishing Profile Php by Profile Id POST

```ts
async apiPublishingProfilePhpByProfileIdPOST(
  profileId: string,
  body?: ConfigurationsPhpUpsertCommand,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `profileId` | `string` | Template, Required | - |
| `body` | [`ConfigurationsPhpUpsertCommand \| undefined`](../../doc/models/configurations-php-upsert-command.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const profileId = 'profileId0';
const contentType = null;
try {
  const { result, ...httpResponse } = await publishingProfileConfigurationController.apiPublishingProfilePhpByProfileIdPOST(profileId);
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


# Api Publishing Profile Php Disable PATCH

```ts
async apiPublishingProfilePhpDisablePATCH(
  profileId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `profileId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const profileId = 'profileId0';
try {
  const { result, ...httpResponse } = await publishingProfileConfigurationController.apiPublishingProfilePhpDisablePATCH(profileId);
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


# Api Publishing Profile Python by Profile Id POST

```ts
async apiPublishingProfilePythonByProfileIdPOST(
  profileId: string,
  body?: ConfigurationsPythonUpsertCommand,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `profileId` | `string` | Template, Required | - |
| `body` | [`ConfigurationsPythonUpsertCommand \| undefined`](../../doc/models/configurations-python-upsert-command.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const profileId = 'profileId0';
const contentType = null;
try {
  const { result, ...httpResponse } = await publishingProfileConfigurationController.apiPublishingProfilePythonByProfileIdPOST(profileId);
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


# Api Publishing Profile Python Disable PATCH

```ts
async apiPublishingProfilePythonDisablePATCH(
  profileId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `profileId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const profileId = 'profileId0';
try {
  const { result, ...httpResponse } = await publishingProfileConfigurationController.apiPublishingProfilePythonDisablePATCH(profileId);
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


# Api Publishing Profile Ruby by Profile Id POST

```ts
async apiPublishingProfileRubyByProfileIdPOST(
  profileId: string,
  body?: ConfigurationsRubyUpsertCommand,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `profileId` | `string` | Template, Required | - |
| `body` | [`ConfigurationsRubyUpsertCommand \| undefined`](../../doc/models/configurations-ruby-upsert-command.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const profileId = 'profileId0';
const contentType = null;
try {
  const { result, ...httpResponse } = await publishingProfileConfigurationController.apiPublishingProfileRubyByProfileIdPOST(profileId);
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


# Api Publishing Profile Ruby Disable PATCH

```ts
async apiPublishingProfileRubyDisablePATCH(
  profileId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `profileId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const profileId = 'profileId0';
try {
  const { result, ...httpResponse } = await publishingProfileConfigurationController.apiPublishingProfileRubyDisablePATCH(profileId);
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


# Api Publishing Profile Swift by Profile Id POST

```ts
async apiPublishingProfileSwiftByProfileIdPOST(
  profileId: string,
  body?: ConfigurationsSwiftUpsertCommand,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `profileId` | `string` | Template, Required | - |
| `body` | [`ConfigurationsSwiftUpsertCommand \| undefined`](../../doc/models/configurations-swift-upsert-command.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const profileId = 'profileId0';
const contentType = null;
try {
  const { result, ...httpResponse } = await publishingProfileConfigurationController.apiPublishingProfileSwiftByProfileIdPOST(profileId);
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


# Api Publishing Profile Swift Disable PATCH

```ts
async apiPublishingProfileSwiftDisablePATCH(
  profileId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `profileId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const profileId = 'profileId0';
try {
  const { result, ...httpResponse } = await publishingProfileConfigurationController.apiPublishingProfileSwiftDisablePATCH(profileId);
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


# Api Publishing Profile Typescript POST

```ts
async apiPublishingProfileTypescriptPOST(
  profileId: string,
  body?: ConfigurationsTypeScriptUpsertCommand,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `profileId` | `string` | Template, Required | - |
| `body` | [`ConfigurationsTypeScriptUpsertCommand \| undefined`](../../doc/models/configurations-type-script-upsert-command.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const profileId = 'profileId0';
const contentType = null;
try {
  const { result, ...httpResponse } = await publishingProfileConfigurationController.apiPublishingProfileTypescriptPOST(profileId);
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


# Api Publishing Profile Typescript Disable PATCH

```ts
async apiPublishingProfileTypescriptDisablePATCH(
  profileId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `profileId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const profileId = 'profileId0';
try {
  const { result, ...httpResponse } = await publishingProfileConfigurationController.apiPublishingProfileTypescriptDisablePATCH(profileId);
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

