# Simple Calculator

```php
$simpleCalculatorController = $client->getSimpleCalculatorController();
```

## Class Name

`SimpleCalculatorController`


# Get Calculateex

Calculates the expression using the specified operation.

```php
function getCalculateex(array $options): float
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation1` | [`string (OperationTypeEnum)`](../../doc/models/operation-type-enum.md) | Template, Required | The operator to apply on the variables |
| `x` | `float` | Query, Required | The LHS value |
| `y` | `float` | Query, Required | The RHS value |
| `operation` | `string` | Template, Required | - |

## Response Type

`float`

## Example Usage

```php
$collect = [];

$operation1 = Models\OperationTypeEnum::MULTIPLY;
$collect['operation1'] = $operation1;

$x = 222.14;
$collect['x'] = $x;

$y = 165.14;
$collect['y'] = $y;

$operation = 'operation4';
$collect['operation'] = $operation;

$result = $simpleCalculatorController->getCalculateex($collect);
```

