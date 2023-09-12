def matrix_multiply(A, B):
    rows_A = len(A)
    cols_A = len(A[0])
    rows_B = len(B)
    cols_B = len(B[0])

    if cols_A != rows_B:
        raise ValueError("Las dimensiones de la matriz no son compatibles para la multiplicación.")

    result = [[0 for _ in range(cols_B)] for _ in range(rows_A)]

    for i in range(rows_A):
        for j in range(cols_B):
            for k in range(cols_A):
                result[i][j] += A[i][k] * B[k][j]

    return result


matrix1 = [[1, 2, 3], [4, 5, 6]]

matrix2 = [[7, 8], [9, 10], [11, 12]]

result_matrix = matrix_multiply(matrix1, matrix2)

for row in result_matrix:
    print(row)
